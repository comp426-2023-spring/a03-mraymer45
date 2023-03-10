#!/usr/bin/env node

// Importing necessary modules and functions
import minimist from "minimist";
import { rpsls } from "../lib/rpsls.js";

var argv = minimist(process.argv.slice(2));

const help = `
Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

    -h, --help        display this help message and exit
    -r, --rules       display the rules and exit

Examples:
    node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
    node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`;

const rules = `
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
    console.log(JSON.stringify(rpsls(shot)));
} catch (error) {
    /*console.error(`${shot} is out of range.`)
    console.log(help);
    console.log(rules);
    process.exit(1);*/
    console.error(`${shot} is out of range.`);

    console.log('Usage: node-rpsls [SHOT]');
    console.log('Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n');
    console.log('  -h, --help\t  display this help message and exit');
    console.log('  -r, --rules\t  display the rules and exit\n');
    console.log('Examples:');
    console.log('  node-rpsls\t  Return JSON with single player RPSLS result');
    console.log('\t\t  e.g. {"player":"rock"}');
    console.log('  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.');
    console.log('\t\t  e.g {"player":"rock","opponent":"Spock","result":"lose"}');

    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n');
    console.log(' Scissors CUTS Paper');
    console.log(' Paper COVERS Rock');
    console.log(' Rock SMOOSHES Lizard');
    console.log(' Lizard POISONS Spock');
    console.log(' Spock SMASHES Scissors');
    console.log(' Scissors DECAPITATES Lizard');
    console.log(' Lizard EATS Paper');
    console.log(' Paper DISPROVES Spock');
    console.log(' Spock VAPORIZES Rock');
    console.log(' Rock CRUSHES Scissors');

    process.exit(1);
}