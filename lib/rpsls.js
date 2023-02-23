// Functions for each version of Rock Paper Scissors
export {rps, rpsls}

// All possible game outcomes that can be accessed through indexing
// This idea for creating the game came from the link below:
// https://github.com/partha7978/Rock-Paper-Scissors-Lizard-Spock/blob/main/scripts/script.js
let outcomes = {
    rock: {
        rock: 'tie',
        paper: 'win',
        scissors: 'lose',
        lizard: 'lose',
        spock: 'win'
    },
    paper: {
        rock: 'lose',
        paper: 'tie',
        scissors: 'win',
        lizard: 'win',
        spock: 'lose'
    },
    scissors: {
        rock: 'win',
        paper: 'lose',
        scissors: 'tie',
        lizard: 'lose',
        spock: 'win'
    },
    lizard: {
        rock: 'win',
        paper: 'lose',
        scissors: 'win',
        lizard: 'tie',
        spock: 'lose'
    },
    spock: {
        rock: 'lose',
        paper: 'win',
        scissors: 'lose',
        lizard: 'win',
        spock: 'tie'
    }
}

// Rock Paper Scissors
function rps(shot) {
    // The following three lines of code are inspired by code at 
    // https://github.com/partha7978/Rock-Paper-Scissors-Lizard-Spock/blob/main/scripts/script.js
    let options = ["rock", "paper", "scissors"];
    let rand = Math.trunc(Math.random() * 3);
    let comp = options[rand];

    // Just returning a bland output if nothing is input
    if (shot == null) { return { player : comp }; }

    // Making sure it is all lowercase
    shot = shot.toLowerCase();

    if (!(options.includes(shot))) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    return { player: shot,
             opponent: comp,
             result: outcomes[comp][shot] };
}

// Rock Paper Scissors Lizard Spock
function rpsls(shot) {
    // The following three lines of code are inspired by code at 
    // https://github.com/partha7978/Rock-Paper-Scissors-Lizard-Spock/blob/main/scripts/script.js
    let options = ["rock", "paper", "scissors", "lizard", "spock"];
    let rand = Math.trunc(Math.random() * 5);
    let comp = options[rand];

    // Just returning a bland output if nothing is input
    if (shot == null) { return { player : comp }; }

    // Making sure it is all lowercase
    shot = shot.toLowerCase();

    if (!(options.includes(shot))) {
        // console.error(`${shot} is out of range.`)
        throw new RangeError();
    } else {
        return {
            player: shot,
            opponent: comp,
            result: outcomes[comp][shot]
        };
    }
}