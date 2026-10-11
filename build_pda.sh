#!/bin/bash

set -e

OUTPUT="arson_analyst_pda.user.js"

cat > "$OUTPUT" <<'EOF'
// ==UserScript==
// @name         Arson Analyst PDA
// @namespace    torn
// @version      0.23
// @description  Arson Analyst standalone build for Torn PDA
// @match        https://www.torn.com/page.php?sid=crimes*
// @grant        none
// ==/UserScript==

EOF

cat arson_recipes.js >> "$OUTPUT"
printf '\n' >> "$OUTPUT"
cat arson_analyst.js >> "$OUTPUT"

echo "Built $OUTPUT"