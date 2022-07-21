//  Botones
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
// List of buttons
const choices = document.querySelectorAll('.choices');

// Screens
const playerImg = document.querySelector('#playerimage');
const pcImg = document.querySelector('#pcimage');

//Counters
let playerCounter = 0;
let pcCounter = 0;
let playerScore = document.getElementById('playerscore');
let pcScore = document.getElementById('pcscore');
console.log(playerScore.textContent);


// Show rock pic when clicked
rock.addEventListener('click', displayRock);
rock.addEventListener('click', computerSelection);


function displayRock() {
  playerImg.src = 'images/rock.jpg'
  playerImg.alt = 'rock'
}

// Show paper pic when clicked
paper.addEventListener('click', displayPaper);
paper.addEventListener('click', computerSelection);

function displayPaper() {
  playerImg.src = 'images/paper.jpg';
  playerImg.alt = 'paper';
}

// Show scissors pic when clicked
scissors.addEventListener('click', displayScissors);
scissors.addEventListener('click', computerSelection);

function displayScissors() {
  playerImg.src = 'images/scissors.jpg';
  playerImg.alt = 'scissors';
}

//Computer selection
const options = ['rock', 'paper', 'scissors'];

function computerSelection() {
  const options = ['rock', 'paper', 'scissors'];
  rand = Math.floor(Math.random()*options.length);
  final = options[rand];
  if (options[rand] === 'rock') {
    pcImg.src = 'images/rock.jpg';
    pcImg.alt = 'rock';
  } else if (options[rand] === 'paper') {
    pcImg.src = 'images/paper.jpg';
    pcImg.alt = 'paper';
  } else if (options[rand] === 'scissors') {
    pcImg.src = 'images/scissors.jpg';
    pcImg.alt = 'scissors';
  }
  setTimeout(counterFunction, 1000);
}


function counterFunction() {
  if (pcImg.alt === playerImg.alt) {
    if (pcImg.alt === 'holder') {
      return;
    } else {
      alert('You are tie. Try again!');
    } 
  } else if (playerImg.alt === 'rock') {
    if (pcImg.alt === 'paper') {
      pcCounter ++;
      alert('+1 to Computer. Paper covers rock!');
    } else if (pcImg.alt === 'scissors') {
      playerCounter++;
      alert('+1 to Player. Rocks crushes scissors!');
    }
  } else if (playerImg.alt === 'paper') {
    if (pcImg.alt === 'rock') {
      playerCounter ++;
      alert('+1 to Player. Paper covers rock!');
    } else if (pcImg.alt === 'scissors') {
      pcCounter++;
      alert('+1 to Computer. Scissors cut the paper!');
    }
  } else if (playerImg.alt === 'scissors') {
    if (pcImg.alt === 'paper') {
      playerCounter ++;
      alert('+1 to Computer. Scissors cut the paper!');
    } else if (pcImg.alt === 'rock') {
      pcCounter++;
      alert('+1 to Player. Rocks crushes scissors!');
    }
  }
  pcScore.textContent = pcCounter;
  playerScore.textContent = playerCounter;
}

