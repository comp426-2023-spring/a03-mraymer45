#!/usr/bin/env node

// Importing necessary modules and functions
import minimist from "minimist";
import { rps } from "../lib/rpsls.js";

var argv = minimist(process.argv.slice(2));

const help = `
Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit

Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}`;

const rules = `
Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`;

if (argv.help || argv.h) {      // Help message
    console.log(help);
    process.exit(0);
}

if (argv.rules || argv.r) {     // Rules message
    console.log(rules);
    process.exit(0);
}

// User input
let shot = argv._[0];

// Calling the Rock Paper Scissor Functions and outputting help and 
// rules if the input is invalid
try {
    console.log(JSON.stringify(rps(shot)));
} catch (error) {
    console.log(help);
    console.log(rules);
    process.exit(0);
}