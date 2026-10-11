// ==UserScript==
// @name         Arson Analyst PDA Test
// @namespace    torn
// @version      0.21-pda-test
// @description  Standalone Arson Analyst build for Torn PDA compatibility testing
// @match        https://www.torn.com/page.php?sid=crimes*
// @grant        none
// ==/UserScript==

// Arson Analyst — imported legacy recipes.
// The raw field preserves every original source line, including uncertain Try notes.
// Parsed fields are a convenience; check raw before relying on ambiguous entries.
window.arsonRecipes = {
  "A Black Mark": [
    {
      "payout": 210000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 13.9K ",
        "Stoke: ?1 Flamethrower?"
      ],
      "raw": [
        "Payout:210K",
        "Profit/Nerve: 13.9K ",
        "Flamethrower:  Yes",
        "Place: 1 Gasoline ",
        "Stoke: ?1 Flamethrower?"
      ]
    }
  ],
  "A Burnt Child Dreads the Fire": [
    {
      "payout": 235000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 7.5K"
      ],
      "raw": [
        "Payout: 235K",
        "Profit/Nerve: 7.5K",
        "Flamethrower: Yes",
        "Place: 1 Hydrogen Tank ",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "A Dirty Job": [
    {
      "payout": 32000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:32K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "A Fungus Among Us": [
    {
      "payout": 34000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:34K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "A Hot Lead": [
    {
      "payout": 22000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:22K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "A Mug's Game": [
    {
      "payout": 55000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 2.7K"
      ],
      "raw": [
        "Payout:55K",
        "Profit/Nerve: 2.7K",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "A Problem Shared": [
    {
      "payout": 180000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 180K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "A Rash Decision": [
    {
      "payout": 11000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 11K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "A Treat for the Tricked": [
    {
      "payout": 71000,
      "igniter": "Flamethrower",
      "evidence": {
        "Kabuki Mask": 1
      },
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 71K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: 1 Kabuki Mask",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "All Mouth and Trousers": [
    {
      "payout": 56000,
      "igniter": "Flamethrower",
      "evidence": {
        "Diamond Ring": 1
      },
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 56K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: 1 Diamond Ring",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Always Read the Label": [
    {
      "payout": 170000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 5
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 170K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 5 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "Anon Starter": [
    {
      "payout": 31000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:31K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Apart of the Problem": [
    {
      "payout": 265000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:265K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "Ash or Credit?": [
    {
      "payout": 180000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:180K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Ashes to Ancestors": [
    {
      "payout": 90000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 5
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:90K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 5 Gasoline",
        "Stoke: "
      ]
    }
  ],
  "Back, Sack, and Crack": [
    {
      "payout": 300000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:300K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Hydrogen Tank",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Baewatch": [
    {
      "payout": 13000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 13K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Bagged and Tagged": [
    {
      "payout": 1600,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:1.6K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Bald Faced Destruction": [
    {
      "payout": 245000,
      "igniter": "Flamethrower",
      "evidence": {
        "Raw Ivory": 1
      },
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:245K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: 1 Raw Ivory",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Bang For Your Buck": [
    {
      "payout": 44000,
      "igniter": "Flamethrower",
      "evidence": {
        "Grenade": 1
      },
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:44K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: 1 Grenade",
        "Place: 1 Gasoline"
      ]
    }
  ],
  "Banking on It": [
    {
      "payout": 200000,
      "igniter": "Flamethrower",
      "evidence": {
        "Stapler": 1
      },
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:200K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: 1 Stapler",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Beach Bum": [
    {
      "payout": 19000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 19K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Beat the Odds": [
    {
      "payout": 330000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 330K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Beggars Can't be Choosers": [
    {
      "payout": 480000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 5,
        "Thermite": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "try 5 gasoline, 1 Thermite"
      ],
      "raw": [
        "try 5 gasoline, 1 Thermite",
        "Payout: 480K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 5 Gasoline, 2 Thermite",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Beyond Repair": [
    {
      "payout": 93500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "Try: 3 gas"
      ],
      "raw": [
        "Try: 3 gas",
        "Payout: 93.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "Blaze of Glory": [
    {
      "payout": 180000,
      "igniter": "Flamethrower",
      "evidence": {
        "Toothbrush": 1
      },
      "place": {
        "Gasoline": 2
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 180K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: 1 Toothbrush",
        "Place: 2 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "Body of Evidence": [
    {
      "payout": 105000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 5
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 105K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 5 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Bone of Contention": [
    {
      "payout": 43000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": {
        "Blanket": 1
      },
      "status": "documented",
      "notes": [
        "Profit/Nerve: 2.5K "
      ],
      "raw": [
        "Payout: 43K",
        "Profit/Nerve: 2.5K ",
        "ignite: lighter",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: 1 Blanket"
      ]
    }
  ],
  "Boom Industry": [
    {
      "payout": 100000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 3.9K"
      ],
      "raw": [
        "Payout: 100K",
        "Profit/Nerve: 3.9K",
        "Flamethrower: Yes",
        "Place: 3 Gasoline "
      ]
    }
  ],
  "Boxing Clever": [
    {
      "payout": 325000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 325K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Bright Spark": [
    {
      "payout": 275000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 2
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "Try: 1 Hyrdrogen, FT ignite, Metahne stoke"
      ],
      "raw": [
        "Try: 1 Hyrdrogen, FT ignite, Metahne stoke",
        "Payout: 275K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: 2 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Burn After Screening": [
    {
      "payout": 100000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 100K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Burn Notice": [
    {
      "payout": 175000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 5
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 175K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 5 Gasoline",
        "Stoke: 1 Flametrhower",
        "Dampen: "
      ]
    }
  ],
  "Burn Rubber": [
    {
      "payout": 67000,
      "igniter": "Flamethrower",
      "evidence": {
        "Mayan Statue": 1
      },
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 2.4K"
      ],
      "raw": [
        "Payout: 67K",
        "Profit/Nerve: 2.4K",
        "Flamethrower: Yes",
        "Evidence: 1 Mayan Statue",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Burn the Deck": [
    {
      "payout": 96000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 96K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Burned by Stupidity": [
    {
      "payout": 32000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 32K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Burned Cookies": [
    {
      "payout": 81000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Diesel": 2,
        "Magnesium Shavings": 2
      },
      "stoke": {
        "Diesel": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 81K",
        "Profit/Nerve: ",
        "Flamethrower: ",
        "Place: 2 Diesel, 2 Magnesium Shavings",
        "Stoke: 1 Diesel",
        "Dampen: "
      ]
    }
  ],
  "Burning Ambition": [
    {
      "payout": 46000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 2.7K"
      ],
      "raw": [
        "Payout: 46K",
        "Profit/Nerve: 2.7K",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Burning Calories": [
    {
      "payout": 100000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 3.2K"
      ],
      "raw": [
        "Payout: 100K",
        "Profit/Nerve: 3.2K",
        "Flamethrower: Yes",
        "Place: 4 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Burning Liability": [
    {
      "payout": 160000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 2
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 160K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Hydrogen Tank",
        "Stoke: 2 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Burning Memory": [
    {
      "payout": 32000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 32K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Burning Through Cash": [
    {
      "payout": 105000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: Negative"
      ],
      "raw": [
        "Payout: 105K",
        "Profit/Nerve: Negative",
        "Flamethrower: Yes ",
        "Place: 1 Hydrogen Tank",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Burnt Ends": [
    {
      "payout": 170000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Might fail, try 5 gas?",
        "Stoke: ?1 Flamethrower?"
      ],
      "raw": [
        "Might fail, try 5 gas?",
        "Payout:170K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: ?1 Flamethrower?"
      ]
    }
  ],
  "Burn up the Dancefloor": [
    {
      "payout": 175000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:175K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: "
      ]
    }
  ],
  "Cache and Burn": [
    {
      "payout": 490000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Kerosene": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 490K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Kerosene ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Camera Tricks": [
    {
      "payout": 115000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 3.1K"
      ],
      "raw": [
        "Payout: 115K",
        "Profit/Nerve: 3.1K",
        "Flamethrower: Yes",
        "Place: 4 Gasoline ",
        "Stoke:  1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "Carrying a Torch": [
    {
      "payout": 44500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 44.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Chance of Redemption": [
    {
      "payout": 90000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 90K",
        "Profit/Nerve: ",
        "Flamethrower: No",
        "Place: 4 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Charcoal Sketch": [
    {
      "payout": 39000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 39K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Chasing Targets": [
    {
      "payout": 24000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 2K"
      ],
      "raw": [
        "Payout: 24K",
        "Profit/Nerve: 2K",
        "Flamethrower: Yes",
        "Place: 1 Gasoline"
      ]
    }
  ],
  "Checking Out": [
    {
      "payout": 280000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 280K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Child's Play": [
    {
      "payout": 23000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 2.2K"
      ],
      "raw": [
        "Payout: 23K",
        "Profit/Nerve: 2.2K",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Claim to Flame": [
    {
      "payout": 33500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 33.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Clean Sweep": [
    {
      "payout": 150000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 150K",
        "Profit/Nerve:  ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "Cleansed Through Fire": [
    {
      "payout": 46000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Diesel": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 46K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Diesel",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Clinical Exposure": [
    {
      "payout": 165000,
      "igniter": "Lighter",
      "evidence": {
        "Opium": 1
      },
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 165K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Evidence:  1 Opium",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Cold Brew Reality": [
    {
      "payout": 150000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 2
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "try stoke 1 Hydrpgen"
      ],
      "raw": [
        "try stoke 1 Hydrpgen",
        "Payout: 150K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Hydrogen Tank",
        "Stoke: 2 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Cold Feet": [
    {
      "payout": 120000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 5
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "Try 4 gas"
      ],
      "raw": [
        "Try 4 gas",
        "Payout: 120K",
        "Profit/Nerve:  ",
        "Flamethrower: yes",
        "Place: 5 Gasoline ",
        "Stoke: 1 Flamethrower ",
        "Dampen: "
      ]
    }
  ],
  "Cook it Rare": [
    {
      "payout": 330000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 330K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 3 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Cooked and Burned": [
    {
      "payout": 73000,
      "igniter": "Flamethrower",
      "evidence": {
        "Ammonia": 1
      },
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 2.4K"
      ],
      "raw": [
        "Payout: 73K",
        "Profit/Nerve: 2.4K",
        "Flamethrower: Yes",
        "Evidence: 1 Ammonia",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Cooking the Books": [
    {
      "payout": 25000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 25K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Cop Some Heat": [
    {
      "payout": 19000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:19K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Crafty Devil": [
    {
      "payout": 100000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 10K"
      ],
      "raw": [
        "Payout: 100K",
        "Profit/Nerve: 10K",
        "Ignite: Lighter ",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Crisp Bills": [
    {
      "payout": 39000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 39K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Curtain Call": [
    {
      "payout": 57000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 57K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Cut Corners": [
    {
      "payout": 200000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 200K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Daddy's Girl": [
    {
      "payout": 330000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 1
      },
      "stoke": {
        "Methane Tank": 1,
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 330K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Kerosene",
        "Stoke: 1 Methane Tank, 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Damned If You Don't": [
    {
      "payout": 74000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 74K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Dead Giveaway": [
    {
      "payout": 29000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 29K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Dine and Dash": [
    {
      "payout": 95000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 95K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Dirty Money": [
    {
      "payout": 360000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 360K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 3 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Disco Inferno": [
    {
      "payout": 48000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 48K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Don't Hate the Player": [
    {
      "payout": 32000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 32K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline"
      ]
    }
  ],
  "Eight Lives": [
    {
      "payout": 6000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 6K",
        "Profit/Nerve:  ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Emotional Wreck": [
    {
      "payout": 140000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 140K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "End of the Line": [
    {
      "payout": 78000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 78K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Faction Fiction": [
    {
      "payout": 64500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 64.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Family Feud": [
    {
      "payout": 20000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 1.3K "
      ],
      "raw": [
        "Payout: 20K",
        "Profit/Nerve: 1.3K ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Fan the Flames": [
    {
      "payout": 33000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 33K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Hydrogen Tank",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Fight Fire With Fire": [
    {
      "payout": 81000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 81K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Final Cut": [
    {
      "payout": 150000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 4.9K"
      ],
      "raw": [
        "Payout: 150K",
        "Profit/Nerve: 4.9K",
        "Flamethrower: Yes",
        "Place: 4 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Final Markdown": [
    {
      "payout": 49000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 49K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Fire and Brimstone": [
    {
      "payout": 125000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 125K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Fire Burn and Cauldron Bubble": [
    {
      "payout": 170000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 170K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Fire in the Belly": [
    {
      "payout": 17000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 17K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Fire Kills 99.9% of Bacteria": [
    {
      "payout": 305000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 305K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: "
      ]
    }
  ],
  "Fire Sale": [
    {
      "payout": 10000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 10K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Flame and Fortune": [
    {
      "payout": 680000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Kerosene": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 680K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Follow the Leader": [
    {
      "payout": 69000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 69K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Hydrogen Tank",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "For Closure": [
    {
      "payout": 22000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 22K",
        "Profit/Nerve: ",
        "Flamethrower: No",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Foul Play": [
    {
      "payout": 120000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 120K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "From the Ashes": [
    {
      "payout": 170000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 3.3K"
      ],
      "raw": [
        "Payout: 170K",
        "Profit/Nerve: 3.3K",
        "Flamethrower: Yes",
        "Place: 4 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Gay Frogs": [
    {
      "payout": 34000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 34K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Gentrifried": [
    {
      "payout": 230000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": {
        "Potassium Nitrate": 2
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 230K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: 2 Potassium Nitrate",
        "Dampen: "
      ]
    }
  ],
  "Get Wrecked": [
    {
      "payout": 84000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 84K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Going Viral": [
    {
      "payout": 190000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: K",
        "Stoke: ?1 Flamethrower?"
      ],
      "raw": [
        "Payout: 190K",
        "Profit/Nerve: K",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ?1 Flamethrower?",
        "Dampen: "
      ]
    }
  ],
  "Green With Envy": [
    {
      "payout": 120000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 4.5K"
      ],
      "raw": [
        "Payout: 120K",
        "Profit/Nerve: 4.5K",
        "Flamethrower: Yes",
        "Place: 4 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Gym'll Fix It": [
    {
      "payout": 52000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 52K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hair Today...": [
    {
      "payout": 93000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 93K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Heat the Rich": [
    {
      "payout": 40000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 40K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hide and Seek": [
    {
      "payout": 33000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 33K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "High Time": [
    {
      "payout": 10000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 650"
      ],
      "raw": [
        "Payout: 10K",
        "Profit/Nerve: 650",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hire and Fire": [
    {
      "payout": 57000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 57K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hold Fire": [
    {
      "payout": 110000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 110K",
        "Profit/Nerve:  ",
        "Ignite: Lighter",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Holy Smokes": [
    {
      "payout": 56500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 56.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Home and Dry": [
    {
      "payout": 49000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 49K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hostile Takeover": [
    {
      "payout": 300000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 300K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hot Dinners": [
    {
      "payout": 55000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Diesel": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:55K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Diesel",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hot Dog": [
    {
      "payout": 30500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 30.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hot Gossip": [
    {
      "payout": 62000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 62K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hot Off the Press": [
    {
      "payout": 18000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 18K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hot on the Trail": [
    {
      "payout": 390000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 390K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hot out of the Gate": [
    {
      "payout": 96000,
      "igniter": "Flamethrower",
      "evidence": {
        "Gold Tooth": 1
      },
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 96K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: 1 Gold Tooth",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hot Profit": [
    {
      "payout": 57500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 57.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hot Pursuit": [
    {
      "payout": 50000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 50K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Hot Trend": [
    {
      "payout": 54000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 54K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "House Edge": [
    {
      "payout": 190000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 5
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 190K",
        "Profit/Nerve: ",
        "Flamethrower: No",
        "Place: 5 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "House of Cards": [
    {
      "payout": 610000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 2
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 610K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen",
        "Stoke: 2 Hydrogen",
        "Dampen: "
      ]
    }
  ],
  "Igniting Curiosity": [
    {
      "payout": 260000,
      "igniter": "Flamethrower",
      "evidence": {
        "Sumo Doll": 1
      },
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 260K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: 1 Sumo Doll ",
        "Place: 4 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "In Your Debt": [
    {
      "payout": 33000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 33K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Insert Coin to Continue": [
    {
      "payout": 120000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 120K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "It Cuts Both Ways": [
    {
      "payout": 20500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 20.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "It's a Write Off": [
    {
      "payout": 225000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 225K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "It's Not All White": [
    {
      "payout": 140000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 140K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Kindling Spirits": [
    {
      "payout": 92500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 92.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Landmark Decision": [
    {
      "payout": 280000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 5
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Try 4 Gas"
      ],
      "raw": [
        "Try 4 Gas",
        "Payout: 280K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 5 Gasoline "
      ]
    }
  ],
  "Last Lyft Home": [
    {
      "payout": 52000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 52K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline"
      ]
    }
  ],
  "Letter of the Law": [
    {
      "payout": 360000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 2
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 360K",
        "Profit/Nerve:",
        "Flamethrower: Yes",
        "Place: 1 Hydrogen Tank",
        "Stoke: 2 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Light Fingered": [
    {
      "payout": 165000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 165K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Like for Like": [
    {
      "payout": 110000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 1.1K"
      ],
      "raw": [
        "Payout: 110K",
        "Profit/Nerve: 1.1K",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Liquor on the Back Row": [
    {
      "payout": 50000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 50K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline"
      ]
    }
  ],
  "Local Concerns": [
    {
      "payout": 30000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 1.5K"
      ],
      "raw": [
        "Payout: 30K",
        "Profit/Nerve: 1.5K",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Lock, Stock, and Barrel": [
    {
      "payout": 210000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 210K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank"
      ]
    }
  ],
  "Long Pig": [
    {
      "payout": 130000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 130K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Loud and Clear": [
    {
      "payout": 195000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 195K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Lover's Quarrel": [
    {
      "payout": 39000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 39K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Low Rent": [
    {
      "payout": 120000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 120K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Make a Killing": [
    {
      "payout": 390000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1,
        "Kerosene": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 390k",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline, 2 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Marked for Salvation": [
    {
      "payout": 80000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Kerosene": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 80K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Mallrats": [
    {
      "payout": 410000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "Tip: fast responders"
      ],
      "raw": [
        "Tip: fast responders",
        "Payout: 410K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline ",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "Marx & Sparks": [
    {
      "payout": 125000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 125K",
        "Profit/Nerve: ",
        "Flamethrower: yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Medium Rare": [
    {
      "payout": 330000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Diesel": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 330K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 4 Diesel",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Mental Block": [
    {
      "payout": 580000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 5,
        "Thermite": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Stoke: ?1 Flamethrower?"
      ],
      "raw": [
        "Payout: 580K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 5 Gasoline, 1 Thermite",
        "Stoke: ?1 Flamethrower?",
        "Dampen: "
      ]
    }
  ],
  "Milk Milk, Lemonade": [
    {
      "payout": 155000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 155K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Gasoline ",
        "Stoke: ",
        "Dampen:  "
      ]
    }
  ],
  "Muscling In": [
    {
      "payout": 90500,
      "igniter": "Flamethrower",
      "evidence": {
        "Syringe": 1
      },
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 90.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: 1 Syringe",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Naked Aggression": [
    {
      "payout": 31500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 31.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "Needles to Say": [
    {
      "payout": 39000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 39K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Not a Leg to Stand on": [
    {
      "payout": 125000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 125K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Off the Market": [
    {
      "payout": 155000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 4.5K"
      ],
      "raw": [
        "Payout: 155K",
        "Profit/Nerve: 4.5K",
        "Flamethrower: Yes",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Oh God, Yes": [
    {
      "payout": 17500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 17.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Old School": [
    {
      "payout": 62500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 2.3K"
      ],
      "raw": [
        "Payout: 62.5K",
        "Profit/Nerve: 2.3K",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "On Fire at the Box Office": [
    {
      "payout": 14000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 14K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Hydrogen Tank",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "One Rotten Apple": [
    {
      "payout": 180000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 11.9K"
      ],
      "raw": [
        "Payout: 180K",
        "Profit/Nerve: 11.9K",
        "Flamethrower: Yes",
        "Place: 2 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Open House": [
    {
      "payout": 64000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 64K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Out in the Wash": [
    {
      "payout": 235000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 235K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Out with a Bang": [
    {
      "payout": 42000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": {
        "Blanket": 1
      },
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 42K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Gasoline",
        "Dampen: 1 Blanket "
      ]
    }
  ],
  "Party Pooper": [
    {
      "payout": 62000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 3.3K"
      ],
      "raw": [
        "Payout: 62K",
        "Profit/Nerve: 3.3K",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Pest Control": [
    {
      "payout": 16000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 16K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Hydrogen Tank",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Piggy in the Middle": [
    {
      "payout": 180000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 180K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Plane and Simple": [
    {
      "payout": 150000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Magnesium Shavings": 5
      },
      "stoke": {
        "Methane Tanks": 2
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: -5552"
      ],
      "raw": [
        "Payout: 150K",
        "Profit/Nerve: -5552",
        "Flamethrower: Yes",
        "Evidence: ",
        "Place: 5 Magnesium Shavings",
        "Stoke: 2 Methane Tanks",
        "Dampen: "
      ]
    }
  ],
  "Planted": [
    {
      "payout": 120000,
      "igniter": "Lighter",
      "evidence": {
        "Pele Charm": 1
      },
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 120K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Evidence: 1 Pele Charm",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Playing With Fire": [
    {
      "payout": 210000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 210K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 2 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Point of No Return": [
    {
      "payout": 90000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1,
        "Thermite": 1
      },
      "stoke": {
        "Magnesium Shavings": 2
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 90K",
        "Profit/Nerve: ",
        "Flamethrower: ",
        "Place: 1 Gasoline, 1 Thermite",
        "Stoke: 2 Magnesium Shavings",
        "Dampen: "
      ]
    }
  ],
  "Political Firestorm": [
    {
      "payout": 40000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 40K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Pyro for Pornos": [
    {
      "payout": 65000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 65K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline"
      ]
    }
  ],
  "Raising Hell": [
    {
      "payout": 170000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 170K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "Raze the Roof": [
    {
      "payout": 90000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 150"
      ],
      "raw": [
        "Payout: 90k",
        "Profit/Nerve: 150",
        "Ignite: Lighter ",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Raze the Steaks": [
    {
      "payout": 250000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 5
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 250K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 5 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Read the Room": [
    {
      "payout": 125000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Try: 3 Gas"
      ],
      "raw": [
        "Payout: 125K",
        "Try: 3 Gas",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Remote Possibility": [
    {
      "payout": 102500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 102.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline"
      ]
    }
  ],
  "Rest in Peace": [
    {
      "payout": 20500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 1.6K"
      ],
      "raw": [
        "Payout: 20.5K",
        "Profit/Nerve: 1.6K",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Ring of Fire": [
    {
      "payout": 160000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 160K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Risky Business": [
    {
      "payout": 50000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 50K",
        "Profit/Nerve: ",
        "Ignition: Lighter ",
        "Place: 1 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Rock the Boat": [
    {
      "payout": 325000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Diesel": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 325K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Diesel",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Searing Irony": [
    {
      "payout": 240000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 240K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Second Hand Smoke": [
    {
      "payout": 37000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 37K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "See No Evil": [
    {
      "payout": 71000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 3.6K"
      ],
      "raw": [
        "Payout:71K",
        "Profit/Nerve: 3.6K",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Set 'Em Straight": [
    {
      "payout": 310000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 310K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Shaky Investment": [
    {
      "payout": 80000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 80K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Hydrogen Tank",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Shielded from the Truth": [
    {
      "payout": 16000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 16K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Short Shelf Life": [
    {
      "payout": 395000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 395K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Smoke on the Water": [
    {
      "payout": 8600,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 8.6K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Smoke Out": [
    {
      "payout": 21000,
      "igniter": "Flamethrower",
      "evidence": {
        "Cannabis": 1
      },
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 21K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: 1 Cannabis",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Smoke Signals": [
    {
      "payout": 120000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Diesel": 2,
        "Magnesium Shavings": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Try: Try 2 Diesel"
      ],
      "raw": [
        "Try: Try 2 Diesel",
        "Payout: 120K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Diesel, 1 Magnesium Shavings",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Smoke Screen": [
    {
      "payout": 535000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Stoke: ?1 Flamethrower?"
      ],
      "raw": [
        "Payout: 535K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ?1 Flamethrower?",
        "Dampen: "
      ]
    }
  ],
  "Smoke Without Fire": [
    {
      "payout": 200000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 200K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Smoldering Resentment": [
    {
      "payout": 10000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 950"
      ],
      "raw": [
        "Payout: 10K",
        "Profit/Nerve: 950",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Sofa King Cheap": [
    {
      "payout": 120000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 120K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Specter of Destruction": [
    {
      "payout": 74000,
      "igniter": "Flamethrower",
      "evidence": {
        "Elephant Statue": 1
      },
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 74K",
        "Profit/Nerve: ",
        "Flamethrower: ",
        "Evidence: 1 Elephant Statue",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Spirit Level": [
    {
      "payout": 280000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 280k",
        "Profit/Nerve:",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke:",
        "Dampen: "
      ]
    }
  ],
  "Stick to the Script": [
    {
      "payout": 160000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 2
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 160K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: 2 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Stink to High Heaven": [
    {
      "payout": 41000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 41K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Strike While it's Hot": [
    {
      "payout": 265000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 2
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 265K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Hydrogen Tank",
        "Stoke: 2 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Stroke of Fortune": [
    {
      "payout": 120000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 120K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: 1 Flamethrower"
      ]
    }
  ],
  "Supermarket Sweep": [
    {
      "payout": 265000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 5
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 265K",
        "Profit/Nerve:",
        "Flamethrower: Yes",
        "Place: 5 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Swansong": [
    {
      "payout": 27000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 27K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Kerosene",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Taking out the Trash": [
    {
      "payout": 110000,
      "igniter": "Flamethrower",
      "evidence": {
        "Hard Drive": 1
      },
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:110K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: 1 Hard Drive",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "That Place Is History": [
    {
      "payout": 118500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 118.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "The Ashes of Empire": [
    {
      "payout": 175000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 175K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 2 Gasoline ",
        "Dampen: "
      ]
    }
  ],
  "The Bad Samaritan": [
    {
      "payout": 22000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 22K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "The Declaration of Inebrience": [
    {
      "payout": 115000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 115K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "The Devil's in the Details": [
    {
      "payout": 130000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Diesel": 1
      },
      "stoke": {
        "Potassium Nitrate": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [
        "might fail",
        "Profit/Nerve: 750"
      ],
      "raw": [
        "might fail",
        "Payout: 130K",
        "Profit/Nerve: 750",
        "Flamethrower: Yes",
        "Place: 1 Diesel",
        "Stoke: 1 Potassium Nitrate",
        "Dampen: "
      ]
    }
  ],
  "The Empyre Strikes Back": [
    {
      "payout": 49000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 2.4K"
      ],
      "raw": [
        "Payout: 49K",
        "Profit/Nerve: 2.4K",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "The Fat is in the Fire": [
    {
      "payout": 300000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 5
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 300k",
        "Profit/Nerve: ",
        "Flamethrower: yes",
        "Place: 5 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "The Fire Chief": [
    {
      "payout": 140000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": {
        "Flamethrower": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 140K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: 1 Flamethrower",
        "Dampen: "
      ]
    }
  ],
  "The Fried Piper": [
    {
      "payout": 270000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 14.9K"
      ],
      "raw": [
        "Payout: 270K",
        "Profit/Nerve: 14.9K",
        "Ignite: Lighter ",
        "Place: 1 Hydrogen Tank "
      ]
    }
  ],
  "The Grass Ain't Greener": [
    {
      "payout": 85000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 85K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "The Male Gaze": [
    {
      "payout": 110000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 110K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "The Midnight Oil": [
    {
      "payout": 75000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 75K",
        "Profit/Nerve: ",
        "Flamethrower: Yes ",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "The Plane Truth": [
    {
      "payout": 25000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 25K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "The Savage Beast": [
    {
      "payout": 170000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 170K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "The Smoking Gun": [
    {
      "payout": 470000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Kerosene": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Stoke: ?1 Lighter? "
      ],
      "raw": [
        "Payout: 470K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 4 Kerosene",
        "Stoke: ?1 Lighter? ",
        "Dampen: "
      ]
    }
  ],
  "The Waiting Game": [
    {
      "payout": 120000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 120K",
        "Profit/Nerve: ",
        "Ignite: Lighter",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Third-Degree Burn": [
    {
      "payout": 29000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 2.2K"
      ],
      "raw": [
        "Payout: 29K",
        "Profit/Nerve: 2.2K",
        "Flamethrower: Yes",
        "Place: 1 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "To the Manor Scorned": [
    {
      "payout": 75500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 75.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Totally Armless": [
    {
      "payout": 35000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 35K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Turn up the Heat": [
    {
      "payout": 76000,
      "igniter": "Flamethrower",
      "evidence": {
        "Compass": 1
      },
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 1.6K"
      ],
      "raw": [
        "Payout: 76K",
        "Profit/Nerve: 1.6K",
        "Flamethrower: Yes",
        "Evidence: 1 Compass",
        "Place: 2 Gasoline"
      ]
    }
  ],
  "Twisted Firestarter": [
    {
      "payout": 23000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 23K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Uber Heats": [
    {
      "payout": 59000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 59K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Under the Table": [
    {
      "payout": 400000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Try: gas, lighter, 2 methane",
        "Stoke: ?1 Flamethrower?"
      ],
      "raw": [
        "Try: gas, lighter, 2 methane",
        "Payout: 400K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline ",
        "Stoke: ?1 Flamethrower?",
        "Dampen: "
      ]
    }
  ],
  "Unpopular Mechanics": [
    {
      "payout": 8600,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 8.6K",
        "Profit/Nerve: ",
        "Flamethrower: yes",
        "Place: 1 Gasoline ",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Unspilled Beans": [
    {
      "payout": 220000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 2
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 220K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Hydrogen Tank",
        "Stoke: 2 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Visions of the Savory": [
    {
      "payout": 110000,
      "igniter": "Flamethrower",
      "evidence": {
        "Family Photo": 1
      },
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 110K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence:  1 Family Photo",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Waist Not, Want Not": [
    {
      "payout": 210000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 210K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 4 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Wedded to the Lie": [
    {
      "payout": 69000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 69K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Wet Behind the Ears": [
    {
      "payout": 200000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 1
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 200k",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 1 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Where There's a Will": [
    {
      "payout": 52000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 3
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 52K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Evidence: ",
        "Place: 3 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Whiskey Business": [
    {
      "payout": 90000,
      "igniter": "Lighter",
      "evidence": null,
      "place": {
        "Hydrogen Tank": 1
      },
      "stoke": {
        "Hydrogen Tank": 1
      },
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 90K",
        "Profit/Nerve: ",
        "Ignite: Lighter ",
        "Place: 1 Hydrogen Tank",
        "Stoke: 1 Hydrogen Tank",
        "Dampen: "
      ]
    }
  ],
  "Wired for War": [
    {
      "payout": 430000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 8
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout:430K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 8 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "Womb With a View": [
    {
      "payout": 78500,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 78.5K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline"
      ]
    }
  ],
  "Workplace Burnout": [
    {
      "payout": 73000,
      "igniter": "Flamethrower",
      "evidence": null,
      "place": {
        "Gasoline": 2
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [],
      "raw": [
        "Payout: 73K",
        "Profit/Nerve: ",
        "Flamethrower: Yes",
        "Place: 2 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ],
  "You're Fired!": [
    {
      "payout": 150000,
      "igniter": "Flamethrower",
      "evidence": {
        "Lipstick": 1
      },
      "place": {
        "Gasoline": 4
      },
      "stoke": null,
      "dampen": null,
      "status": "documented",
      "notes": [
        "Profit/Nerve: 4.4K"
      ],
      "raw": [
        "Payout: 150K",
        "Profit/Nerve: 4.4K",
        "Flamethrower: ",
        "Evidence: 1 Lipstick",
        "Place: 4 Gasoline",
        "Stoke: ",
        "Dampen: "
      ]
    }
  ]
};

(function() {
    'use strict';
    const SCRIPT_VERSION = "0.21";
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

// Attach one click listener to an Ignite button and report the selected igniter.
    function watchIgnite(arson) {

        let crimeOption = arson.closest(".crime-option");
        let igniteButton =
            crimeOption?.querySelector('button[aria-label^="Ignite"]');

        if (!igniteButton || igniteButton.dataset.arsonIgniteProcessed) {
            return;
        }

        igniteButton.dataset.arsonIgniteProcessed = "true";

        igniteButton.addEventListener("click", function() {

            let selectedItem =
                crimeOption.querySelector('button[aria-label$=" selected"]');

            console.log(LOG_PREFIX, "Ignite:", {
                building: arson.children[0].textContent,
                scenario: arson.children[1].textContent,
                igniter: selectedItem?.getAttribute("aria-label")
            });
        });
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
            // Watch for an Ignite button.
            watchIgnite(arsons[i]);
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

          arsons[i].addEventListener("click", function() {

            alert(
                "children: " + arsons[i].children.length +
                "\ntext: " + arsons[i].textContent
            );
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
        "Public Only" API key is sufficient
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

        if (!apiKeyInput.value) {
            settingsPanel.style.border = "14px solid #ff3030";
        }

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
            settingsPanel.style.border = "1px solid #777";// Refresh item prices after saving a valid API key
            updateButton.click();

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
