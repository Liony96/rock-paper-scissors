document.addEventListener('click', game);

let playerImage = document.getElementById('playerimage');
let pcImage = document.getElementById('pcimage');
const choices = ['rock', 'paper', 'scissors']; 
let chosen = Math.floor(Math.random()*choices.length);
let final = choices[chosen]


let tieMessage = alert('You\'re tie. Try again');
let loseMessage = alert(`+1 to player ${pcImage.alt} beats ${e.target.id}.`); 
let winMessage = alert(`+1 to computer ${e.target.id} beats ${pcImage.alt}.`);

function game(e) {
  //--Sets the players images on screen--//
  if (e.target.id === choices[chosen]) {
     tieMessage;

    //--Rock conditions
  } else if (e.target.id === 'rock') {
    playerImage.src = 'images/rock.jpg';
    computerSelection();   //--Calls computerSelection function on every button click event
    if (final === 'paper') {
      loseMessage;
    } else if (final === 'scissors') {
      winMessage;
    }

    //--Paper conditions
  } else if (e.target.id === 'paper') {
    computerSelection();   //--Calls computerSelection function on every button click event
    playerImage.src = 'images/paper.jpg';
    if (final === 'scissors') {
      loseMessage;
    } else if (final === 'rock') {
      winMessage;
    }

    //-- Scissors conditions
  } else if (e.target.id === 'scissors') {
    computerSelection();   //--Calls computerSelection function on every button click event
    playerImage.src = 'images/scissors.jpg';
    if (choices[chosen] === 'rock') {
      loseMessage;
    } else if (final === 'paper') {
      winMessage;
    }
  } else return;
}

//-- Selcts R, P or S and displays it on computer's screen

function computerSelection(final) {
  if (final === 'rock') {
    pcImage.src = 'images/rock.jpg';
    pcImage.alt = 'rock';
  } else if (final === 'paper') {
    pcImage.src = 'images/paper.jpg';
    pcImage.alt = 'paper';
  } else if (final === 'scissors') {
    pcImage.src = 'images/scissors.jpg';
    pcImage.alt = 'scissors';
  }
  console.log(pcImage.alt);
}

