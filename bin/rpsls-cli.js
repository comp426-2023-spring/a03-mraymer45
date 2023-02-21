#!/usr/bin/env node

// Importing necessary modules and functions
import minimist from "minimist";
import { rpsls } from "../lib/rpsls.js";

var argv = minimist(process.argv.slice(2));

if (argv.help || argv.h) {      // Help message
    console.log(`
        Usage: node-rpsls [SHOT]
        Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
        
            -h, --help        display this help message and exit
            -r, --rules       display the rules and exit
        
        Examples:
            node-rpsls        Return JSON with single player RPSLS result.
                                e.g. {"player":"rock"}
            node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                                e.g {"player":"rock","opponent":"Spock","result":"lose"}`
    );
    process.exit(0);
}

if (argv.rules || argv.r) {     // Rules message
    console.log(`
        Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock SMOOSHES Lizard
            - Lizard POISONS Spock
            - Spock SMASHES Scissors
            - Scissors DECAPITATES Lizard
            - Lizard EATS Paper
            - Paper DISPROVES Spock
            - Spock VAPORIZES Rock
            - Rock CRUSHES Scissors`
    );
    process.exit(0);
}

// User input
let shot = argv._[0];

// Calling the Rock Paper Scissor Functions and outputting help and 
// rules if the input is invalid
try {
    console.log(JSON.stringify(rpsls(shot)));
} catch (error) {
    console.log(`Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock SMOOSHES Lizard
        - Lizard POISONS Spock
        - Spock SMASHES Scissors
        - Scissors DECAPITATES Lizard
        - Lizard EATS Paper
        - Paper DISPROVES Spock
        - Spock VAPORIZES Rock
        - Rock CRUSHES Scissors`
    );
    process.exit(0);
}