#!/bin/bash

set -e

OUTPUT="arson_analyst_standalone.user.js"

cat > "$OUTPUT" <<'EOF'
// ==UserScript==
// @name         Arson Analyst
// @namespace    torn
// @version      0.25
// @description  Arson Analyst standalone build
// @match        https://www.torn.com/page.php?sid=crimes*
// @grant        none
// ==/UserScript==

EOF

cat arson_recipes.js >> "$OUTPUT"
printf '\n' >> "$OUTPUT"
cat arson_analyst.js >> "$OUTPUT"

echo "Built $OUTPUT"