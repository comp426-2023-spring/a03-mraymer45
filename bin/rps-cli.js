#!/usr/bin/env node

// Importing necessary modules and functions
import minimist from "minimist";
import { rps } from "../lib/rpsls.js";

var argv = minimist(process.argv.slice(2));

if (argv.help || argv.h) {      // Help message
    console.log(`
        Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)

            -h, --help      display this help message and exit
            -r, --rules     display the rules and exit

        Examples:
            node-rps        Return JSON with single player RPS result.
                            e.g. {"player":"rock"}
            node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                            e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    process.exit(0);
}

if (argv.rules || argv.r) {     // Rules message
    console.log(`
        Rules for Rock Paper Scissors:

            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock CRUSHES Scissors`
    );
    process.exit(0);
}

// User input
let shot = argv._[0];

// Calling the Rock Paper Scissor Functions and outputting help and 
// rules if the input is invalid
try {
    console.log(JSON.stringify(rps(shot)));
} catch (error) {
    console.log(`
    Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)

        -h, --help      display this help message and exit
        -r, --rules     display the rules and exit

    Examples:
        node-rps        Return JSON with single player RPS result.
                        e.g. {"player":"rock"}
        node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"scissors","result":"win"}
    
    Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`
    );
    process.exit(0);
}