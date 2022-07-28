document.addEventListener('click', game);

let playerImage = document.getElementById('playerimage');
let pcImage = document.getElementById('pcimage');

function game(e) {
  //--Sets the players images on screen--//
  if (e.target.id === 'rock') {
    computerSelection();   //--Calls computerSelection function on every button click event
    playerImage.src = 'images/rock.jpg';
  } else if (e.target.id === 'paper') {
    computerSelection();   //--Calls computerSelection function on every button click event
    playerImage.src = 'images/paper.jpg';
  } else if (e.target.id === 'scissors') {
    computerSelection();   //--Calls computerSelection function on every button click event
    playerImage.src = 'images/scissors.jpg';
  }
}

//-- Selcts R, P or S and displays it on computer's screen
function computerSelection() {
  const choices = ['rock', 'paper', 'scissors']; 
  let chosen = Math.floor(Math.random()*choices.length);
  console.log(choices[chosen]);
  if (choices[chosen] === 'rock') {
    pcImage.src = 'images/rock.jpg';
  } else if (choices[chosen] === 'paper') {
    pcImage.src = 'images/paper.jpg';
  } else if (choices[chosen] === 'scissors') {
    pcImage.src = 'images/scissors.jpg';
  }
}

//--Cunter and Score function
