function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    index = Math.floor(Math.random()*choices.length)
    chosen = choices[index]
    return chosen.toUpperCase()
}

function getPlayerChoice() {
    input = prompt("Rock, Scissors or Paper?")
    return input.toUpperCase()
}

let computer = getComputerChoice();
let player = getPlayerChoice();
let winMessage = "Congratulations! " + player + " beats " + computer + ". You won!";
let loseMessage = "Better luck next time! " + computer + " beats " + player + ". You lost!"; 

function playRound(getComputerChoice, getPlayerChoice) {
    if (computer === player){
        return "You're tie! Try again."
    } else if (computer === "ROCK") {
        if (player === "PAPER") {
            return winMessage
        } else if (player === "SCISSORS") {
            return loseMessage
        }
    } else if (computer === "PAPER") {
        if (player === "ROCK") {
            return loseMessage
        } else if (player === "SCISSORS") {
            return winMessage
        }
    } else if (computer === "SCISSORS") {
        if (player === "ROCK") {
            return winMessage
        } else if (player === "PAPER") {
            return loseMessage
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), player)  
    }
}

alert(playRound());