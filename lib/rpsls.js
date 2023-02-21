// Functions for each version of Rock Paper Scissors
export {rps, rpsls}

// All possible game outcomes that can be accessed through indexing
// This idea for creating the game came from the link below:
// https://github.com/partha7978/Rock-Paper-Scissors-Lizard-Spock/blob/main/scripts/script.js
let outcomes = {
    Rock: {
        Rock: 'tie',
        Paper: 'win',
        Scissors: 'lose',
        Lizard: 'lose',
        Spock: 'win'
    },
    Paper: {
        Rock: 'lose',
        Paper: 'tie',
        Scissors: 'win',
        Lizard: 'win',
        Spock: 'lose'
    },
    Scissors: {
        Rock: 'win',
        Paper: 'lose',
        Scissors: 'tie',
        Lizard: 'lose',
        Spock: 'win'
    },
    Lizard: {
        Rock: 'win',
        Paper: 'lose',
        Scissors: 'win',
        Lizard: 'tie',
        Spock: 'lose'
    },
    Spock: {
        Rock: 'lose',
        Paper: 'win',
        Scissors: 'lose',
        Lizard: 'win',
        Spock: 'tie'
    }
}

// Rock Paper Scissors
function rps(shot) {
    // The following three lines of code are inspired by code at 
    // https://github.com/partha7978/Rock-Paper-Scissors-Lizard-Spock/blob/main/scripts/script.js
    let options = ["Rock", "Paper", "Scissors"];
    let rand = Math.trunc(Math.random() * 3);
    let comp = options[rand];

    // Just returning a bland output if nothing is input
    if (shot == null) { return { player : comp }; }

    // Making sure it is all lowercase
    shot = shot.toLowerCase();

    if (!shot in options) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    return {
        player: shot,
        opponent: comp,
        result: outcomes[comp][shot]
    };
}

// Rock Paper Scissors Lizard Spock
function rpsls(shot) {
    // The following three lines of code are inspired by code at 
    // https://github.com/partha7978/Rock-Paper-Scissors-Lizard-Spock/blob/main/scripts/script.js
    let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let rand = Math.trunc(Math.random() * 5);
    let comp = options[rand];

    // Just returning a bland output if nothing is input
    if (shot == null) { return { player : comp }; }

    // Making sure it is all lowercase
    shot = shot.toLowerCase();

    if (!shot in options) {
        console.error(`${shot} is out of range.`);
        throw new RangeError();
    }

    return {
        player: shot,
        opponent: comp,
        result: outcomes[comp][shot]
    };
}