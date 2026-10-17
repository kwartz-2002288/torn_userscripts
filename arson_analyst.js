(function() {
    'use strict';
    const SCRIPT_VERSION = "0.34";
    const LOG_PREFIX = `[Arson Analyst ${SCRIPT_VERSION}]`;
    const PDA_KEY = "###PDA-APIKEY###";
    const isPDA = !PDA_KEY.includes("#");
    console.log(LOG_PREFIX, "Userscript loaded", isPDA ? "(Torn PDA)" : "");

    const WANTED_IDS = [
        45, 54, 172, 196, 200, 201, 220,
        221, 259, 265, 275, 278, 280, 358,
        407, 427, 742, 833, 1085, 1089, 1094,
        1219, 1235, 1248, 1264, 1272, 1282,
        1286, 1294, 1457, 1458, 1459, 1460,
        1461, 1462, 1463
    ];

    const igniters = [
        "Lighter",
        "Flamethrower"
    ];

    const defaultProfitThresholds = {
        low: 1000,
        medium: 3000,
        high: 6000
    };

    function getRecipes() {
        return window.arsonRecipes || {};
    }

    function getStoredApiKey() {
        return localStorage.getItem("arsonAnalyst.apiKey") || "";
    }

    function getApiKey() {
        return getStoredApiKey() || (isPDA ? PDA_KEY : "");
    }

    function readStoredPrices() {
        try {
            const parsed = JSON.parse(localStorage.getItem("arsonAnalyst.itemPrices"));
            return parsed && typeof parsed === "object" ? parsed : {};
        } catch (error) {
            return {};
        }
    }

    function hasPrices() {
        return Object.keys(itemPrices).length > 0;
    }

    let itemPrices = readStoredPrices();
    let pendingCollect = null;
    let previousResults = [];
    let autoPriceUpdateRequested = false;
    let priceUpdateRunning = false;

    let profitThresholds = {
        low: Number(localStorage.getItem("arsonAnalyst.profitThresholdLow")) ||
            defaultProfitThresholds.low,
        medium: Number(localStorage.getItem("arsonAnalyst.profitThresholdMedium")) ||
            defaultProfitThresholds.medium,
        high: Number(localStorage.getItem("arsonAnalyst.profitThresholdHigh")) ||
            defaultProfitThresholds.high
    };

    console.log(LOG_PREFIX, "Item prices:", itemPrices);
    const warnedMissingPrices = new Set();

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

    async function fetchItemPrices() {
        const apiKey = getApiKey();

        if (!apiKey) {
            throw new Error("No API key set");
        }

        const response = await fetch(
            "https://api.torn.com/v2/torn/" +
            WANTED_IDS.join(",") +
            "/items?key=" + encodeURIComponent(apiKey)
        );

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.error || "API error");
        }

        const newPrices = {};

        for (const item of data.items || []) {
            const price = item.value?.market_price;
            if (typeof price === "number") {
                newPrices[item.name] = price;
            }
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

    function styleInfoLabel(label) {
        label.style.fontSize = "11px";
        label.style.opacity = "0.8";
    }

    function styleButton(button) {
        button.style.background = "#555";
        button.style.color = "white";
        button.style.border = "1px solid #777";
        button.style.borderRadius = "4px";
        button.style.padding = "3px 8px";
        button.style.cursor = "pointer";
        button.style.fontSize = "11px";
    }

    function keepInsideViewport(element, left, top) {
        const width = element.getBoundingClientRect().width;
        element.style.left = Math.max(5, Math.min(left, window.innerWidth - width - 5)) + "px";
        element.style.top = top + "px";
    }

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
    tooltip.style.boxSizing = "border-box";
    tooltip.style.maxWidth = "calc(100vw - 10px)";

    document.body.appendChild(tooltip);

    function hideTooltip() {
        tooltip.style.display = "none";
        tooltip.dataset.scenario = "";
        tooltip.arsonAnchor = null;
    }

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
            '<span style="text-align:right;overflow-wrap:anywhere">' +
            escapeHTML(value) +
            '</span>' +
            '</div>';
    }

    function formatItems(items) {
        return Object.entries(items)
            .map(([item, quantity]) => quantity + " " + item)
            .join(", ");
    }

    function calculateItemsCost(items) {
        let cost = 0;

        for (const item in items) {
            if (igniters.includes(item)) {
                continue;
            }

            if (typeof itemPrices[item] !== "number") {
                if (!warnedMissingPrices.has(item)) {
                    warnedMissingPrices.add(item);
                    console.warn(LOG_PREFIX, "Missing price for:", item);
                }
                return NaN;
            }

            cost += items[item] * itemPrices[item];
        }

        return cost;
    }

    function calculateRecipeCost(recipe) {
        let cost = calculateItemsCost(recipe.place);

        if (recipe.igniter === "Molotov Cocktail") {
            cost += calculateItemsCost({ "Molotov Cocktail": 1 });
        }

        if (recipe.stoke) {
            cost += calculateItemsCost(recipe.stoke);
        }

        if (recipe.dampen) {
            for (const [item, quantity] of Object.entries(recipe.dampen)) {
                if (item !== "Blanket") {
                    cost += calculateItemsCost({ [item]: quantity });
                }
            }
        }

        if (recipe.evidence) {
            cost += calculateItemsCost(recipe.evidence);
        }

        return cost;
    }

    function countActions(items) {
        if (!items) {
            return 0;
        }

        return Object.values(items).reduce((total, quantity) => total + quantity, 0);
    }

    function calculateNerve(recipe) {
        const actions = 1 +
            countActions(recipe.evidence) +
            countActions(recipe.place) +
            countActions(recipe.stoke) +
            countActions(recipe.dampen);

        return 5 + 5 * actions;
    }

    function calculateProfitPerNerve(recipe) {
        return (recipe.payout - calculateRecipeCost(recipe)) / calculateNerve(recipe);
    }

    function getBestProfitPerNerve(scenarioRecipes) {
        let best = null;

        for (const recipe of scenarioRecipes) {
            if (recipe.status !== "documented" ||
                recipe.payout == null ||
                recipe.igniter == null ||
                !recipe.place) {
                continue;
            }

            const value = calculateProfitPerNerve(recipe);

            if (Number.isFinite(value) && (best === null || value > best)) {
                best = value;
            }
        }

        return best;
    }

    function colorArsonRow(element, scenarioRecipes) {
        const profitPerNerve = getBestProfitPerNerve(scenarioRecipes);

        if (profitPerNerve === null) {
            element.style.backgroundColor = "";
        } else if (profitPerNerve <= profitThresholds.low) {
            element.style.backgroundColor = "rgba(100, 45, 45, 0.55)";
        } else if (profitPerNerve <= profitThresholds.medium) {
            element.style.backgroundColor = "rgba(125, 105, 35, 0.45)";
        } else if (profitPerNerve <= profitThresholds.high) {
            element.style.backgroundColor = "rgba(45, 105, 55, 0.45)";
        } else {
            element.style.backgroundColor = "rgba(55, 145, 65, 0.55)";
        }
    }

    function updateArsonRowColor(arson) {
        const scenario = arson.children[1]?.textContent;
        const crimeOption = arson.closest(".crime-option");
        const row = crimeOption?.querySelector(".crime-option-sections");

        if (!row) {
            return;
        }

        if (crimeOption.querySelector('button[aria-label^="Collect"]')) {
            row.style.backgroundColor = "rgba(32, 92, 155, 0.78)";
            return;
        }

        const scenarioRecipes = getRecipes()[scenario];

        if (scenarioRecipes) {
            colorArsonRow(row, scenarioRecipes);
        }
    }

    function getArsonResults() {
        const snapshot = document.evaluate(
            "//*[not(*) and normalize-space(.)='SUCCESS']",
            document.body,
            null,
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
            null
        );

        const results = [];

        for (let i = 0; i < snapshot.snapshotLength; i++) {
            results.push(snapshot.snapshotItem(i).parentElement);
        }

        return results;
    }

    function watchIgnite(arson) {
        const crimeOption = arson.closest(".crime-option");
        const igniteButton = crimeOption?.querySelector('button[aria-label^="Ignite"]');

        if (!igniteButton || igniteButton.dataset.arsonIgniteProcessed) {
            return;
        }

        igniteButton.dataset.arsonIgniteProcessed = "true";

        igniteButton.addEventListener("click", function() {
            const selectedItem = crimeOption.querySelector('button[aria-label$=" selected"]');

            console.log(LOG_PREFIX, "Ignite:", {
                building: arson.children[0]?.textContent,
                scenario: arson.children[1]?.textContent,
                igniter: selectedItem?.getAttribute("aria-label")
            });
        });
    }

    function watchCollect(arson) {
        const crimeOption = arson.closest(".crime-option");
        const collectButton = crimeOption?.querySelector('button[aria-label^="Collect"]');

        if (!collectButton || collectButton.dataset.arsonCollectProcessed) {
            return;
        }

        collectButton.dataset.arsonCollectProcessed = "true";

        collectButton.addEventListener("click", function() {
            if (tooltip.arsonAnchor && crimeOption.contains(tooltip.arsonAnchor)) {
                hideTooltip();
            }

            previousResults = getArsonResults();

            pendingCollect = {
                building: arson.children[0]?.textContent,
                scenario: arson.children[1]?.textContent
            };

            console.log(LOG_PREFIX, "Collect:", pendingCollect);
        });
    }

    function findArsonResult() {
        const newResult = getArsonResults().find(
            result => !previousResults.includes(result)
        );

        if (!newResult) {
            return null;
        }

        const payoutText = [...newResult.querySelectorAll("*")]
            .find(el => /^\$[\d,]+$/.test(el.textContent.trim()))
            ?.textContent.trim();

        if (!payoutText) {
            return null;
        }

        return Number(payoutText.replace(/[$,]/g, ""));
    }

    function showRecipeTooltip(anchor, scenarioRecipes) {
        const rect = anchor.getBoundingClientRect();
        const thinLine = '<div style="border-top:1px solid #bbb;margin:6px 0"></div>';
        const recipeLine = '<div style="border-top:1px dashed #888;margin:10px 0"></div>';
        let tooltipHTML = "";

        scenarioRecipes.forEach(function(recipe, index) {
            if (index > 0) {
                tooltipHTML += recipeLine;
            }

            const totalCost = calculateRecipeCost(recipe);
            const profitPerNerve = calculateProfitPerNerve(recipe);

            if (recipe.evidence) {
                tooltipHTML += tooltipRow("Evidence", formatItems(recipe.evidence), true);
            }

            tooltipHTML += tooltipRow("Place", formatItems(recipe.place), true);
            tooltipHTML += tooltipRow("Ignite", recipe.igniter, true);

            if (recipe.stoke) {
                tooltipHTML += tooltipRow("Stoke", formatItems(recipe.stoke), true);
            }

            if (recipe.dampen) {
                tooltipHTML += tooltipRow("Dampen", formatItems(recipe.dampen), true);
            }

            tooltipHTML += thinLine;
            tooltipHTML += tooltipRow("Nerve", calculateNerve(recipe));
            tooltipHTML += tooltipRow("Payout", "$" + recipe.payout.toLocaleString("en-US"));
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
        });

        tooltip.innerHTML = tooltipHTML;
        tooltip.style.display = "block";
        const tooltipLeft = hasHover ? rect.left + 40 : rect.left;
        keepInsideViewport(tooltip, tooltipLeft, rect.bottom + 5);
    }

    function showNotice(title, detail) {
        const notice = document.createElement("div");

        notice.style.position = "fixed";
        notice.style.background = "white";
        notice.style.color = "black";
        notice.style.border = "1px solid #777";
        notice.style.borderRadius = "5px";
        notice.style.padding = "12px 16px";
        notice.style.zIndex = "10001";
        notice.style.boxShadow = "0 2px 8px rgba(0,0,0,0.35)";
        notice.style.minWidth = "200px";
        notice.style.maxWidth = "calc(100vw - 20px)";
        notice.style.boxSizing = "border-box";

        notice.innerHTML = `
        <div style="font-weight:bold; margin-bottom:6px;">${escapeHTML(title)}</div>
        <div style="font-size:11px; margin-bottom:12px;">${escapeHTML(detail)}</div>
        <div style="text-align:right;"><button>OK</button></div>
    `;

        const okButton = notice.querySelector("button");
        styleButton(okButton);
        okButton.addEventListener("click", function() {
            notice.remove();
        });

        document.body.appendChild(notice);
        const rect = updateButton.getBoundingClientRect();
        keepInsideViewport(notice, rect.left, rect.bottom + 5);
    }

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
<a href="https://www.torn.com/profiles.php?XID=2002288"
   target="_blank"
   title="Arson Analyst by kwartz"
   style="display:inline-block;">
    <img src="${logoData}"
         width="28"
         height="30"
         class="arson-analyst-flame"
         style="margin-right:3px;"
         alt="Arson Analyst">
</a>
    v${SCRIPT_VERSION}
`;

    styleInfoLabel(versionLabel);
    versionLabel.style.display = "inline-flex";
    versionLabel.style.alignItems = "center";

    const updateDateLabel = document.createElement("span");
    styleInfoLabel(updateDateLabel);

    const lastUpdate = localStorage.getItem("arsonAnalyst.pricesLastUpdate");

    if (lastUpdate) {
        updateDateLabel.textContent = formatUpdateDate(lastUpdate);
    }

    const updateButton = document.createElement("button");
    updateButton.id = "arson-analyst-update";
    updateButton.textContent = "Update item prices";
    styleButton(updateButton);
    updateButton.style.marginLeft = "10px";

    async function updatePrices(showResult) {
        if (priceUpdateRunning) {
            return;
        }

        if (!getApiKey()) {
            settings.open();
            return;
        }

        priceUpdateRunning = true;
        updateButton.disabled = true;
        console.log(LOG_PREFIX, "Updating prices...");

        try {
            const newPrices = await fetchItemPrices();
            const now = String(Date.now());

            itemPrices = newPrices;
            warnedMissingPrices.clear();
            localStorage.setItem("arsonAnalyst.itemPrices", JSON.stringify(newPrices));
            localStorage.setItem("arsonAnalyst.pricesLastUpdate", now);
            updateDateLabel.textContent = formatUpdateDate(now);

            console.log(LOG_PREFIX, "New prices:", newPrices);
            processArsons();

            if (showResult) {
                showNotice("Item prices updated", formatUpdateDate(now));
            }
        } catch (error) {
            console.error(LOG_PREFIX, "Price update failed:", error);
            showNotice("Item prices not updated", error.message);
        } finally {
            priceUpdateRunning = false;
            updateButton.disabled = false;
        }
    }

    updateButton.addEventListener("click", function() {
        updatePrices(true);
    });

    function createSettings() {
        const settingsButton = document.createElement("button");
        settingsButton.textContent = "Settings";
        styleButton(settingsButton);

        const settingsPanel = document.createElement("div");

        settingsPanel.style.display = "none";
        settingsPanel.style.position = isPDA ? "absolute" : "fixed";
        settingsPanel.style.background = "white";
        settingsPanel.style.color = "black";
        settingsPanel.style.border = "1px solid #777";
        settingsPanel.style.borderRadius = "4px";
        settingsPanel.style.padding = "10px";
        settingsPanel.style.zIndex = "10000";
        settingsPanel.style.maxWidth = "calc(100vw - 10px)";
        settingsPanel.style.boxSizing = "border-box";

        const keyHelp = isPDA
            ? "Leave empty to use your Torn PDA key<br>\"Public Only\" API key is sufficient"
            : "Edit and Save to change key<br>\"Public Only\" API key is sufficient";

        settingsPanel.innerHTML = `
    <div style="font-weight:bold; margin-bottom:8px;">API key</div>
    <div>
        <input id="arson-api-key"
               type="text"
               placeholder="${isPDA ? "Using your Torn PDA key" : "Enter a valid Torn API key"}"
               style="width:180px; max-width:100%; padding:3px 5px;
               border:1px solid #777; border-radius:3px; background:#fff;">
    </div>
    <div style="font-size:11px; margin-top:3px; opacity:0.75;">${keyHelp}</div>

    <div style="font-weight:bold; margin-top:12px; margin-bottom:8px;">Profit/Nerve color thresholds</div>
    <div>Low: <input id="threshold-low" type="number" step="500" style="width:65px"></div>
    <div>Medium: <input id="threshold-medium" type="number" step="500" style="width:65px"></div>
    <div>High: <input id="threshold-high" type="number" step="500" style="width:65px"></div>

    <div id="arson-settings-status" style="font-size:11px; color:#c00; margin-top:6px;"></div>

    <div style="margin-top:8px; text-align:right;">
        <button id="arson-settings-defaults">Defaults</button>
        <button id="arson-settings-save">Save</button>
    </div>
`;

        document.body.appendChild(settingsPanel);

        const lowInput = settingsPanel.querySelector("#threshold-low");
        const mediumInput = settingsPanel.querySelector("#threshold-medium");
        const highInput = settingsPanel.querySelector("#threshold-high");
        const apiKeyInput = settingsPanel.querySelector("#arson-api-key");
        const statusLabel = settingsPanel.querySelector("#arson-settings-status");
        const defaultsButton = settingsPanel.querySelector("#arson-settings-defaults");
        const saveButton = settingsPanel.querySelector("#arson-settings-save");

        styleButton(defaultsButton);
        styleButton(saveButton);

        function displayThresholds(thresholds) {
            lowInput.value = thresholds.low;
            mediumInput.value = thresholds.medium;
            highInput.value = thresholds.high;
        }

        function open() {
            displayThresholds(profitThresholds);
            apiKeyInput.value = getStoredApiKey();
            statusLabel.textContent = "";
            settingsPanel.style.border = getApiKey() ? "1px solid #777" : "14px solid #ff3030";
            settingsPanel.style.display = "block";
            const rect = settingsButton.getBoundingClientRect();

            if (isPDA) {
                settingsPanel.style.left = Math.max(5, rect.left + window.scrollX) + "px";
                settingsPanel.style.top = (rect.bottom + window.scrollY + 4) + "px";
            } else {
                keepInsideViewport(settingsPanel, rect.left, rect.bottom + 4);
            }
        }

        function close() {
            settingsPanel.style.display = "none";
        }

        defaultsButton.addEventListener("click", function() {
            displayThresholds(defaultProfitThresholds);
        });

        saveButton.addEventListener("click", async function() {
            const apiKey = apiKeyInput.value.trim();
            const thresholds = {
                low: Number(lowInput.value),
                medium: Number(mediumInput.value),
                high: Number(highInput.value)
            };

            if (!(thresholds.low < thresholds.medium && thresholds.medium < thresholds.high)) {
                statusLabel.textContent = "Thresholds must be in increasing order.";
                return;
            }

            if (!apiKey && !isPDA) {
                statusLabel.textContent = "A Torn API key is required.";
                return;
            }

            if (apiKey) {
                saveButton.disabled = true;
                statusLabel.textContent = "Checking API key...";

                try {
                    await validateApiKey(apiKey);
                } catch (error) {
                    statusLabel.textContent = `API key validation failed: ${error.message}`;
                    return;
                } finally {
                    saveButton.disabled = false;
                }

                localStorage.setItem("arsonAnalyst.apiKey", apiKey);
            } else {
                localStorage.removeItem("arsonAnalyst.apiKey");
            }

            profitThresholds = thresholds;
            localStorage.setItem("arsonAnalyst.profitThresholdLow", String(thresholds.low));
            localStorage.setItem("arsonAnalyst.profitThresholdMedium", String(thresholds.medium));
            localStorage.setItem("arsonAnalyst.profitThresholdHigh", String(thresholds.high));
            console.log(LOG_PREFIX, "Thresholds:", thresholds);

            close();

            if (!hasPrices()) {
                updatePrices(true);
            }

            processArsons();
        });

        settingsButton.addEventListener("click", function() {
            if (settingsPanel.style.display === "none") {
                open();
            } else {
                close();
            }
        });

        return { button: settingsButton, open: open };
    }

    const settings = createSettings();

    const updateControls = document.createElement("div");
    updateControls.style.display = "flex";
    updateControls.style.alignItems = "center";
    updateControls.style.flexWrap = "nowrap";
    updateControls.style.minWidth = "0";

    const hasHover = window.matchMedia("(hover: hover)").matches;
    const isNarrow = window.matchMedia("(max-width: 600px)").matches;

    if (hasHover && !isNarrow) {
        updateControls.style.gap = "8px";
        updateControls.append(versionLabel, updateButton, updateDateLabel, settings.button);
    } else {
        updateControls.style.gap = "4px";
        updateButton.textContent = "Update";
        updateButton.style.marginLeft = "0";
        updateControls.append(versionLabel, updateButton, settings.button);
    }

    function attachControls() {
        if (updateControls.isConnected) {
            return;
        }

        const title = [...document.querySelectorAll('[class*="title___"]')]
            .find(el => el.textContent.trim() === "Arson");

        if (!title) {
            return;
        }

        title.after(updateControls);

        if (!getApiKey()) {
            settings.open();
        } else if (!hasPrices() && !autoPriceUpdateRequested) {
            autoPriceUpdateRequested = true;
            updatePrices(false);
        }
    }

    function processArsons() {
        if (location.hash !== "#/arson") {
            return;
        }

        attachControls();

        const recipes = getRecipes();
        const arsons = document.querySelectorAll('[class*="titleAndScenario"]');

        for (const arson of arsons) {
            updateArsonRowColor(arson);
            watchIgnite(arson);
            watchCollect(arson);

            if (arson.dataset.arsonProcessed) {
                continue;
            }

            arson.dataset.arsonProcessed = "true";

            if (hasHover) {
                arson.addEventListener("mouseenter", function() {
                    const scenario = arson.children[1]?.textContent;

                    if (!recipes[scenario]) {
                        return;
                    }

                    showRecipeTooltip(arson, recipes[scenario]);
                    tooltip.dataset.scenario = scenario;
                    tooltip.arsonAnchor = arson;
                });

                arson.addEventListener("click", function() {
                    if (tooltip.arsonAnchor === arson) {
                        hideTooltip();
                    }
                });
            } else {
                const crimeOption = arson.closest(".crime-option");

                crimeOption?.addEventListener("click", function(event) {
                    if (!event.target.matches('[class*="title"]')) {
                        return;
                    }

                    const scenario = arson.children[1]?.textContent;

                    if (!recipes[scenario]) {
                        return;
                    }

                    if (tooltip.style.display === "block" && tooltip.arsonAnchor === crimeOption) {
                        hideTooltip();
                        return;
                    }

                    showRecipeTooltip(crimeOption, recipes[scenario]);

                    const tooltipRect = tooltip.getBoundingClientRect();
                    tooltip.style.left = Math.max(5, (window.innerWidth - tooltipRect.width) / 2) + "px";
                    tooltip.style.top = (crimeOption.getBoundingClientRect().bottom - 5) + "px";
                    tooltip.dataset.scenario = scenario;
                    tooltip.arsonAnchor = crimeOption;
                });
            }
        }
    }

    window.addEventListener("scroll", function() {
        const anchor = tooltip.arsonAnchor;

        if (tooltip.style.display !== "block" || !anchor || !anchor.isConnected) {
            return;
        }

        tooltip.style.top = anchor.getBoundingClientRect().bottom + "px";
    }, true);

    if (!hasHover) {
        document.addEventListener("click", function(event) {
            const anchor = tooltip.arsonAnchor;

            if (tooltip.style.display !== "block" || tooltip.contains(event.target) || anchor?.contains(event.target)) {
                return;
            }

            hideTooltip();
        }, true);
    }

    function onDomChange() {
        if (tooltip.arsonAnchor && !tooltip.arsonAnchor.isConnected) {
            hideTooltip();
        }

        processArsons();

        if (pendingCollect) {
            const payout = findArsonResult();

            if (payout !== null) {
                console.log(LOG_PREFIX, "Result:", {
                    building: pendingCollect.building,
                    scenario: pendingCollect.scenario,
                    payout: payout
                });

                pendingCollect = null;
            }
        }
    }

    let updateScheduled = false;

    const observer = new MutationObserver(function() {
        if (updateScheduled) {
            return;
        }

        updateScheduled = true;

        requestAnimationFrame(function() {
            updateScheduled = false;
            onDomChange();
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    processArsons();
})();
