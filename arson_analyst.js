(function() {
    'use strict';
    const SCRIPT_VERSION = "0.18";
    const LOG_PREFIX = `[Arson Analyst ${SCRIPT_VERSION}]`;
    console.log(LOG_PREFIX, "Userscript loaded");


// Validate a Torn API key and check its access level
    async function validateApiKey(apiKey) {
        const response = await fetch(
            `https://api.torn.com/v2/key/info?key=${encodeURIComponent(apiKey)}`
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.error || "Invalid API key");
        }

        const level = data.info?.access?.level;

        if (typeof level !== "number" || level < 1) {
            throw new Error("API key requires Public Only access or higher");
        }

        return data.info;
    }

    // -------------------------------------------------------------------------
    // Configuration and persistent state
    // -------------------------------------------------------------------------

    // Recipes database loaded by arson_recipes.js.
    const recipes = window.arsonRecipes;

    const igniters = [
        "Lighter",
        "Flamethrower"
    ];

    const storedPrices = localStorage.getItem(
        "arsonAnalyst.itemPrices"
    );

    let itemPrices = JSON.parse(storedPrices);
    let pendingCollect = null;
    let previousResults = [];
    const defaultProfitThresholds = {
        low: 1000,
        medium: 3000,
        high: 6000
    };

    let profitThresholds = {
        low: Number(localStorage.getItem("arsonAnalyst.profitThresholdLow")) ||
            defaultProfitThresholds.low,
        medium: Number(localStorage.getItem("arsonAnalyst.profitThresholdMedium")) ||
            defaultProfitThresholds.medium,
        high: Number(localStorage.getItem("arsonAnalyst.profitThresholdHigh")) ||
            defaultProfitThresholds.high
    };

    console.log(LOG_PREFIX, " Item prices:", itemPrices);

    // -------------------------------------------------------------------------
    // Tooltip UI
    // -------------------------------------------------------------------------

    const tooltip = document.createElement("div");

    tooltip.style.position = "fixed";
    tooltip.style.background = "white";
    tooltip.style.color = "black";
    tooltip.style.border = "1px solid black";
    tooltip.style.zIndex = "9999";
    tooltip.style.display = "none";
    tooltip.style.fontSize = "11px";
    tooltip.style.lineHeight = "1.4";
    tooltip.style.padding = "8px 10px";
    tooltip.style.whiteSpace = "normal";

    document.body.appendChild(tooltip);

    // -------------------------------------------------------------------------
    // Torn API and price cache
    // -------------------------------------------------------------------------

    // Fetch current market prices for every consumable used by the recipe database.
    async function fetchItemPrices() {

        const apiKey = localStorage.getItem("arsonAnalyst.apiKey");

        const wantedIds = [
            45, 54, 172, 196, 200, 201, 220,
            221, 259, 265, 275, 278, 280, 358,
            407, 427, 742, 833, 1085, 1089, 1094,
            1219, 1235, 1248, 1264, 1272, 1282,
            1286, 1294, 1457, 1458, 1459, 1460,
            1461, 1462, 1463
        ];
        const response = await fetch(
            "https://api.torn.com/v2/torn/" +
            wantedIds.join(",") +
            "/items?key=" + apiKey
        );

        const data = await response.json();
        if (data.error) {
            console.error(
                LOG_PREFIX, "API error:",
                data.error
            );
            return null;
        }

        const newPrices = {};

        for (let i = 0; i < data.items.length; i++) {
            let item = data.items[i];
            newPrices[item.name] = item.value.market_price;
        }

        return newPrices;
    }

    function formatUpdateDate(timestamp) {

        const date = new Date(Number(timestamp));

        return "Prices updated: " + date.toLocaleString("en-GB", {
            timeZone: "UTC",
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }) + " UTC";

    }
    console.log(
        LOG_PREFIX, "Last update:",
        formatUpdateDate(
            localStorage.getItem("arsonAnalyst.pricesLastUpdate")
        )
    );

    function styleInfoLabel(label) {
        label.style.fontSize = "11px";
        label.style.opacity = "0.8";
    }

    // -------------------------------------------------------------------------
    // Tooltip formatting helpers
    // -------------------------------------------------------------------------

    // Escape values inserted into tooltip HTML.
    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function(char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[char];
        });
    }

    function tooltipRow(label, value, bullet = false) {
        return '<div style="display:flex;justify-content:space-between;gap:16px">' +
            '<span style="color:#aaa;white-space:nowrap">' +
            (bullet ? "• " : "") + label +
            '</span>' +
            '<span style="text-align:right;white-space:nowrap">' +
            escapeHTML(value) +
            '</span>' +
            '</div>';
    }

    // Format an item map such as {Gasoline: 2} for display.
    function formatItems(items) {

        let text = "";

        for (let item in items) {

            if (text !== "") {
                text = text + ", ";
            }

            text = text + items[item] + " " + item;
        }

        return text;
    }

    // -------------------------------------------------------------------------
    // Recipe cost, nerve and profitability calculations
    // -------------------------------------------------------------------------

    // Igniters are reusable and therefore excluded from consumable cost.
    function calculateItemsCost(items) {

        let cost = 0;

        for (let item in items) {

            if (igniters.includes(item)) {
                continue;
            }

            if (itemPrices[item] === undefined) {
                console.warn(
                    LOG_PREFIX, "Missing price for:", item
                );
                return NaN;
            }

            cost = cost + items[item] * itemPrices[item];
        }

        return cost;
    }

    function calculateRecipeCost(recipe) {
        let cost = calculateItemsCost(recipe.place);
        if (recipe.igniter === "Molotov Cocktail") {
            cost += itemPrices["Molotov Cocktail"];
        }

        if (recipe.stoke)
            cost += calculateItemsCost(recipe.stoke);

        if (recipe.dampen) {
            for (const [item, quantity] of Object.entries(recipe.dampen)) {
                if (item !== "Blanket") {
                    cost += calculateItemsCost({ [item]: quantity });
                }
            }
        }

        if (recipe.evidence)
            cost += calculateItemsCost(recipe.evidence);

        return cost;
    }


    function countActions(items) {

        let actions = 0;

        if (!items) {
            return 0;
        }

        for (let item in items) {
            actions = actions + items[item];
        }

        return actions;
    }

    function calculateNerve(recipe) {

        let actions = 1;  // Ignite

        actions += countActions(recipe.evidence);
        actions += countActions(recipe.place);
        actions += countActions(recipe.stoke);
        actions += countActions(recipe.dampen);

        // Breach (3) + Collect (2) are fixed; every counted action costs 5 nerve.
        return 5 + 5 * actions;
    }

    function calculateProfitPerNerve(recipe) {

        let profit = recipe.payout - calculateRecipeCost(recipe);
        let nerve = calculateNerve(recipe);

        return profit / nerve;
    }

    // Return the best usable Profit/Nerve value among the known recipes.
    function getBestProfitPerNerve(scenarioRecipes) {
        let best = null;

        for (let recipe of scenarioRecipes) {
            if (recipe.status !== "documented" ||
                recipe.payout == null ||
                recipe.igniter == null ||
                !recipe.place) {
                continue;
            }

            let value = calculateProfitPerNerve(recipe);

            if (Number.isFinite(value) && (best === null || value > best)) {
                best = value;
            }
        }

        return best;
    }

    // -------------------------------------------------------------------------
    // Mission row highlighting
    // -------------------------------------------------------------------------

    function colorArsonRow(element, scenarioRecipes) {
        let profitPerNerve = getBestProfitPerNerve(scenarioRecipes);

        // No usable recipe: keep Torn's original background.
        if (profitPerNerve === null) {
            element.style.backgroundColor = "";
            return;
        }

        if (profitPerNerve <= profitThresholds.low) {
            element.style.backgroundColor = "rgba(100, 45, 45, 0.55)";
        } else if (profitPerNerve <= profitThresholds.medium) {
            element.style.backgroundColor = "rgba(125, 105, 35, 0.45)";
        } else if (profitPerNerve <= profitThresholds.high) {
            element.style.backgroundColor = "rgba(45, 105, 55, 0.45)";
        } else {
            element.style.backgroundColor = "rgba(55, 145, 65, 0.55)";
        }    }

    function updateArsonRowColor(arson) {

        let scenario = arson.children[1].textContent;
        let crimeOption = arson.closest(".crime-option");
        let row = crimeOption?.querySelector(".crime-option-sections");

        if (!row) {
            return;
        }

        // Collect has priority over profitability highlighting.
        if (crimeOption.textContent.toLowerCase().includes("collect")) {
            row.style.backgroundColor = "rgba(32, 92, 155, 0.78)";
            return;
        }

        // Otherwise, use the profitability color when a recipe is known.
        if (recipes[scenario]) {
            colorArsonRow(row, recipes[scenario]);
        }
    }

    // -------------------------------------------------------------------------
    // Collect tracking and payout detection
    // -------------------------------------------------------------------------

    // Return the result panels currently showing SUCCESS.
    function getArsonResults() {
        return [...document.querySelectorAll("*")]
            .filter(el =>
                el.children.length === 0 &&
                el.textContent.trim() === "SUCCESS"
            )
            .map(el => el.parentElement);
    }

    // Attach one click listener to a Collect button and snapshot existing results.
    function watchCollect(arson) {

        let crimeOption = arson.closest(".crime-option");
        let collectButton =
            crimeOption?.querySelector('button[aria-label^="Collect"]');

        if (!collectButton || collectButton.dataset.arsonCollectProcessed) {
            return;
        }

        collectButton.dataset.arsonCollectProcessed = "true";

        collectButton.addEventListener("click", function() {
            previousResults = getArsonResults();

            pendingCollect = {
                building: arson.children[0].textContent,
                scenario: arson.children[1].textContent
            };

            console.log(LOG_PREFIX, "Collect:", pendingCollect);
        });
    }

    // Find the SUCCESS panel created after Collect and extract its cash payout.
    function findArsonResult() {

        let currentResults = getArsonResults();

        let newResult = currentResults.find(
            result => !previousResults.includes(result)
        );

        if (!newResult) {
            return null;
        }

        let payoutText = [...newResult.querySelectorAll("*")]
            .find(el => /^\$[\d,]+$/.test(el.textContent.trim()))
            ?.textContent.trim();

        if (!payoutText) {
            return null;
        }

        return Number(payoutText.replace(/[$,]/g, ""));
    }

    // -------------------------------------------------------------------------
    // Arson DOM processing and recipe tooltip
    // -------------------------------------------------------------------------

    function showRecipeTooltip(arson, scenarioRecipes) {

        let rect = arson.getBoundingClientRect();
        let tooltipHTML = "";

        const thinLine =
            '<div style="border-top:1px solid #bbb;margin:6px 0"></div>';

        const recipeLine =
            '<div style="border-top:1px dashed #888;margin:10px 0"></div>';

        for (let j = 0; j < scenarioRecipes.length; j++) {

            let recipe = scenarioRecipes[j];

            // Separator between recipes
            if (j > 0) {
                tooltipHTML += recipeLine;
            }

            let totalCost = calculateRecipeCost(recipe);
            let profitPerNerve = calculateProfitPerNerve(recipe);

            // Actions
            if (recipe.evidence) {
                tooltipHTML += tooltipRow(
                    "Evidence", formatItems(recipe.evidence), true
                );
            }

            tooltipHTML += tooltipRow(
                "Place", formatItems(recipe.place), true
            );

            tooltipHTML += tooltipRow(
                "Ignite", recipe.igniter, true
            );

            if (recipe.stoke) {
                tooltipHTML += tooltipRow(
                    "Stoke", formatItems(recipe.stoke), true
                );
            }

            if (recipe.dampen) {
                tooltipHTML += tooltipRow(
                    "Dampen", formatItems(recipe.dampen), true
                );
            }

            // Results
            tooltipHTML += thinLine;

            tooltipHTML += tooltipRow(
                "Nerve",
                calculateNerve(recipe)
            );

            tooltipHTML += tooltipRow(
                "Payout",
                "$" + recipe.payout.toLocaleString("en-US")
            );

            tooltipHTML += tooltipRow(
                "Items Cost",
                Number.isFinite(totalCost)
                    ? "$" + totalCost.toLocaleString("en-US")
                    : "Price unavailable"
            );

            tooltipHTML += tooltipRow(
                "Profit/Nerve",
                Number.isFinite(profitPerNerve)
                    ? "$" + Math.round(profitPerNerve).toLocaleString("en-US")
                    : "Unavailable"
            );
        }

        tooltip.innerHTML = tooltipHTML;

        tooltip.style.left = rect.left + "px";
        tooltip.style.top = (rect.bottom + 5) + "px";
        tooltip.style.display = "block";
    }

    // Process Arson elements currently present in the DOM. Torn virtualizes the
    // mission list, so this function is intentionally safe to call repeatedly.
    function processArsons() {

        // Do nothing outside the Arson page
        if (location.hash !== "#/arson") {
            return;
        }

        const titles = document.querySelectorAll('[class*="title___"]');

        for (let i = 0; i < titles.length; i++) {

            if (titles[i].textContent.trim() === "Arson") {

                if (!updateButton.isConnected) {
                    titles[i].after(updateControls);

                    if (!localStorage.getItem("arsonAnalyst.apiKey")) {
                        settingsButton.click();
                    }
                }

                break;
            }
        }
        const arsons =
            document.querySelectorAll('[class*="titleAndScenario"]');

        for (let i = 0; i < arsons.length; i++) {

            // Row color may need to change later, for example when Collect appears.
            updateArsonRowColor(arsons[i]);
            // Watch for a Collect button.
            watchCollect(arsons[i]);

            // Event listeners only need to be added once.
            if (arsons[i].dataset.arsonProcessed) {
                continue;
            }

            arsons[i].dataset.arsonProcessed = "true";

            arsons[i].addEventListener("mouseenter", function() {

                let scenario = arsons[i].children[1].textContent;

                // No known recipe for this scenario
                if (!recipes[scenario]) {
                    return;
                }

                showRecipeTooltip(arsons[i], recipes[scenario]);
            });

            arsons[i].addEventListener("mouseleave", function() {
                tooltip.style.display = "none";
            });
        }
    }

    // -------------------------------------------------------------------------
    // Controls: price update and profitability thresholds
    // -------------------------------------------------------------------------

    function styleButton(button) {
        button.style.background = "#555";
        button.style.color = "white";
        button.style.border = "1px solid #777";
        button.style.borderRadius = "4px";
        button.style.padding = "3px 8px";
        button.style.cursor = "pointer";
        button.style.fontSize = "11px";
    }
// Display the running script version on the Arson page.
    const flameStyle = document.createElement("style");

    flameStyle.textContent = `
@keyframes arsonFlameFlicker {
    0%, 100% {
        transform: scale(1, 1);
    }
    50% {
        transform: scale(0.94, 1.08);
    }
}

.arson-analyst-flame {
    transform-origin: 50% 100%;
    animation: arsonFlameFlicker 1.1s ease-in-out infinite;
}
`;

    document.head.appendChild(flameStyle);
    const logoData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAEp0lEQVR4nJ2VWUyUVxiG3+/8/8/ADDMsiiziICAii4gLqCwyuJSWahfjWCXRQLAaY+JSY9O06khs0tbGJnpRtVp7w4UZS2oaKheWACWltSIurRFEBaQiYgUHOsDMv3y9kFrTaGn7Xp+873Pe7+R8wDhaE4QYAAQALkCMd/65chVABoB92QE7anYlny+aak0GAJfrf5o+pmEqScDM0T0zuPmDXT3z0tKmMDP9E+nz01IhE4htCYjxNLUac65ci965NPQTIuJ9bjf9N7oCyGO1BdeW4DxnBxvtgWb/9ZIodUUipgH07/t0OyEBhNfsmFu3Ci2cp3CPJUD9CdLocLGJPy7Eur9Cx7my2wlp9WnS92bwug9fsn3vCJg523OR1F9HVTKTgSCTyooGi8sF4RiPjAiQBGFLnOTofDuWufqg7psV5etWoLWANG801IF1xJvi4ACA5o1QMNbLMwn32hGqG4QVmfr2OLMdmrta5YFeOdBOFBsGNqeS3GXw9da7gdq2GZbt8z6Dyq5nGDoBCQBpgcg8sIRrDQumoeUiG3V1kjyZ2JbFsFoZCAGLSGFq0Mwdy8sK363aGvkpVYCZIZ4mFU4nQAB3Gxheb8PiRw+R4p3uYzmMiO0EKZ0gp5DQu1hP70dCZVH/F4qv587KCH3z8ZdxiAiG2/nULMYSAr4pRmO/Ddqt3SF+79EgXV0KTS2FplWH6eohSfevId2fI2mD2cS9a8GPouDrLSUuS8F8Bp48dkEEo7IYR4tFcJ6hKIbdFyaZL/ogvwCSX5xNnJkGTNehLGEopaFkLc/SpHOk+z3CiBwCL4oXhQSwo2DMcPc8rFk+dUIZEnNVW4wm6PodfDdqQlXnDAzOTQNMnZBT43G5TcKpq5HoDb8vQmYzheRDAjHutRqxKQiMq3fAcAFC5E/BzpA+jX2xEiklk+iCbMD/6gmkbzqJmv2VkCcWoaPZglZRjvz3qnH2cA+U8ngEbIiW7w3DF744/ZVtK2NKKypgOFwFQkQIJPPoEEklAWI0YwhtUhoWLhtActIP8FsWYuTSTbSc9WDB+iREB59CxLJluKZ6gaQRDglTxKaM36dM9HSFAoADDRDaCIY5S2ZZO8cNZ0aQvSUezZWH8O3xY8hZa8OJogZMyJgMxVuNk9sPIN/JuPR1P/DbIMyswmjqRMd9vQ0A6usB0daFGpEAetjo1Qc84UiJaodJVxEdoiPRfAt9KTZkZz4Cd3YgMTUcoSOtsIXa0F6tGdgWLF0RYvDLX/AVEVDfAINyAfuxMuWCJT9q0gMv+/p/vC/fa1RpJADI2RgBa5od/vZu1B/pg0UHbLNMPDXbqlOsRSTZhHywrGPDnof0uXsVS6tPQycIwgaDF7y5MbIqaH5cjO65jcw8Xffe8Bu1NcOQWUCFgUUrJyAs1EOXm2Q5MH0mAgclnHn/0js7bvo+cjsfmwEY+5mJYAaiqsozD948t+TOgxu5zMOvMxvFzOpmZt7K7CvkoRuRfLdpjqd2f+6ZN4AcAOC/rYQny6dCwIABAAh/K9Wal7LQlmWLsccrljCr4enxeft+7um+bbp6pG648S7QDgDshER/ko3pD5Us76HkDma3AAAAAElFTkSuQmCC";
    const versionLabel = document.createElement("span");
    versionLabel.innerHTML = `
<img src="${logoData}"
     width="28"
     height="30"
     class="arson-analyst-flame"
     style="margin-right:3px;"
     title="Arson Analyst by kwartz"
     alt="Arson Analyst">
    v${SCRIPT_VERSION}
`;

    styleInfoLabel(versionLabel);
    versionLabel.style.display = "inline-flex";
    versionLabel.style.alignItems = "center";

    // Create the update prices button.
    const updateButton = document.createElement("button");

    updateButton.id = "arson-analyst-update";
    updateButton.textContent = "Update item prices";
    styleButton(updateButton);
    updateButton.style.marginLeft = "10px";
    updateButton.addEventListener("click", async function() {

        console.log(LOG_PREFIX, "Updating prices...");

        let newPrices = await fetchItemPrices();
        if (newPrices === null) {
            return;
        }

        itemPrices = newPrices;
        localStorage.setItem(
            "arsonAnalyst.itemPrices",
            JSON.stringify(newPrices)
        );
        localStorage.setItem(
            "arsonAnalyst.pricesLastUpdate",
            String(Date.now())
        );
        updateDateLabel.textContent = formatUpdateDate(
            localStorage.getItem("arsonAnalyst.pricesLastUpdate")
        );
        console.log(LOG_PREFIX, "New prices:", newPrices);
        console.log(LOG_PREFIX, "Prices saved");
    });

    function createSettingsButton() {

        const settingsButton = document.createElement("button");
        settingsButton.textContent = "Settings";
        styleButton(settingsButton);

        const settingsPanel = document.createElement("div");

        settingsPanel.style.display = "none";
        settingsPanel.style.position = "absolute";
        settingsPanel.style.background = "white";
        settingsPanel.style.color = "black";
        settingsPanel.style.border = "1px solid #777";
        settingsPanel.style.borderRadius = "4px";
        settingsPanel.style.padding = "10px";
        settingsPanel.style.zIndex = "10000";

        settingsPanel.innerHTML = `
    <div style="font-weight:bold; margin-bottom:8px;">
        API key
    </div>

    <div>
        <input id="arson-api-key"
               type="text"
               placeholder="Enter a valid Torn API key"
               style="width:180px; padding:3px 5px; 
               border:1px solid #777; border-radius:3px; background:#fff;">
    </div>
    <div style="font-size:11px; margin-top:3px; opacity:0.75;">
        Edit and Save to change key<br>
        Public Only access is sufficient
    </div>


    <div style="font-weight:bold; margin-top:12px; margin-bottom:8px;">
        Profit/Nerve color thresholds
    </div>

    <div>Low: <input id="threshold-low" type="number" step="500" style="width:65px"></div>
    <div>Medium: <input id="threshold-medium" type="number" step="500" style="width:65px"></div>
    <div>High: <input id="threshold-high" type="number" step="500" style="width:65px"></div>

    <div style="margin-top:8px; text-align:right;">
        <button id="arson-settings-defaults">Defaults</button>
        <button id="arson-settings-save">Save</button>
    </div>
`;

        document.body.appendChild(settingsPanel);

        const lowInput =
            settingsPanel.querySelector("#threshold-low");
        const mediumInput =
            settingsPanel.querySelector("#threshold-medium");
        const highInput =
            settingsPanel.querySelector("#threshold-high");
        const apiKeyInput =
            settingsPanel.querySelector("#arson-api-key");
        const settingsDefaultsButton =
            settingsPanel.querySelector("#arson-settings-defaults");
        const settingsSaveButton =
            settingsPanel.querySelector("#arson-settings-save");

        styleButton(settingsDefaultsButton);
        styleButton(settingsSaveButton);

        function displayThresholds(thresholds) {
            lowInput.value = thresholds.low;
            mediumInput.value = thresholds.medium;
            highInput.value = thresholds.high;
        }
        apiKeyInput.value =
            localStorage.getItem("arsonAnalyst.apiKey") || "";
        displayThresholds(profitThresholds);

        settingsDefaultsButton.addEventListener("click", function() {
            displayThresholds(defaultProfitThresholds);
        });

        settingsSaveButton.addEventListener("click", async function() {
            const apiKey = apiKeyInput.value.trim();

            if (!apiKey) {
                alert("A Torn API key is required.");
                return;
            }

            try {
                await validateApiKey(apiKey);
            } catch (error) {
                alert(`API key validation failed:\n${error.message}`);
                return;
            }

            localStorage.setItem("arsonAnalyst.apiKey", apiKey);

            const thresholds = {
                low: Number(lowInput.value),
                medium: Number(mediumInput.value),
                high: Number(highInput.value)
            };

            if (!(thresholds.low < thresholds.medium &&
                thresholds.medium < thresholds.high)) {
                alert("Thresholds must be in increasing order.");
                return;
            }

            console.log(LOG_PREFIX, "Thresholds:", thresholds);

            profitThresholds = thresholds;

            localStorage.setItem(
                "arsonAnalyst.profitThresholdLow",
                String(profitThresholds.low)
            );
            localStorage.setItem(
                "arsonAnalyst.profitThresholdMedium",
                String(profitThresholds.medium)
            );
            localStorage.setItem(
                "arsonAnalyst.profitThresholdHigh",
                String(profitThresholds.high)
            );

            processArsons();
            settingsPanel.style.display = "none";
        });

        settingsButton.addEventListener("click", function() {

            if (settingsPanel.style.display === "none") {

                displayThresholds(profitThresholds);
                let rect = settingsButton.getBoundingClientRect();

                settingsPanel.style.left = rect.left + "px";
                settingsPanel.style.top = (rect.bottom + 4) + "px";
                settingsPanel.style.display = "block";

            } else {
                settingsPanel.style.display = "none";
            }
        });

        return settingsButton;
    }

    const settingsButton = createSettingsButton();
    const updateDateLabel = document.createElement("span");
    styleInfoLabel(updateDateLabel);

    const lastUpdate = localStorage.getItem(
        "arsonAnalyst.pricesLastUpdate"
    );

    if (lastUpdate) {
        updateDateLabel.textContent = formatUpdateDate(lastUpdate);
    }

    const updateControls = document.createElement("div");

    updateControls.style.display = "flex";
    updateControls.style.alignItems = "center";
    updateControls.style.gap = "8px";

    updateControls.append(
        versionLabel,
        updateButton,
        updateDateLabel,
        settingsButton
    );


    // -------------------------------------------------------------------------
    // Dynamic DOM observer and startup
    // -------------------------------------------------------------------------

    // Torn creates, removes and replaces mission elements dynamically.
    const observer = new MutationObserver(function() {
        processArsons();

        if (pendingCollect) {
            let payout = findArsonResult();

            if (payout !== null) {
                console.log(LOG_PREFIX, "Result:", {
                    building: pendingCollect.building,
                    scenario: pendingCollect.scenario,
                    payout: payout
                });

                pendingCollect = null;
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });


    // Process elements that may already exist when the userscript starts.
    processArsons();

})();