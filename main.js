let playerChoiceBtn = document.querySelectorAll('.choice__btn'),
    playerScoreElem = document.querySelector('.count--player'),
    computerScoreElem = document.querySelector('.count--computer'),
    result = document.querySelector('.result'),
    restartBtn = document.querySelector('.btn__restart'),
    computerChoiceElem = document.querySelector('.choice--computer'),
    countdown = document.querySelector('.moves'),
    computerOption = ['rock', 'paper', 'scissors'],
    playerScore = 0,
    computerScore = 0,
    moves = 5;

  //Event Listeners
playerChoiceBtn.forEach(button => button.addEventListener("click", selectChoice));

//restartBtn.addEventListener('click', restartGame);

//Generate random choice for computer
function computerPlay() {
  let indexChoice = Math.floor(Math.random() * computerOption.length);
  computerChoiceElem.innerHTML = `Computer choose: ${computerOption[indexChoice]}`;
  return computerOption[indexChoice];

}

//Handle the both choices
function selectChoice() {
  let playerChoice = this.id,
      computerChoice = computerPlay();
  winner(playerChoice, computerChoice);
  movesLeft();
}

//countdown moves
function movesLeft() {
  moves--;
  countdown.innerHTML = `Moves left: ${moves}`;
  if(moves == 0) {
    gameOver(countdown);
  }
}

//Game is over + restart
function gameOver(countdown) {
  let chooseMove = document.querySelector('.choice__title');

  playerChoiceBtn.forEach(option => {
    option.style.display = 'none';
  })

  computerChoiceElem.style.display = 'none';

  chooseMove.innerText = 'Game Over!';
  chooseMove.style.color = '#3362e2';
  chooseMove.style.fontSize = '2rem';

  countdown.style.display = 'none';

  if(playerScore > computerScore) {
    result.innerText = 'You won the game!';
    result.style.color = '#308D46';
    result.style.fontSize = '2rem';
  }else if(playerScore < computerScore) {
    result.innerText = 'You lost the game!';
    result.style.color = 'red';
    result.style.fontSize = '2rem';
  } else {
    result.innerText = 'Tie';
    result.style.color = 'grey';
    result.style.fontSize = '2rem';
  }

  restartBtn.addEventListener('click', () => {
    window.location.reload();
  })
}

//decide winner, update score and display result
function winner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    result.innerHTML = "It's a tie!";
  } else if(
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result.innerHTML = 'Player Wins!';
    playerScore++;
    playerScoreElem.innerHTML = `${playerScore}`;
  } else {
    result.innerHTML = 'Computer wins!';
    computerScore++;
    computerScoreElem.innerHTML = `${computerScore}`;
  }
  
}

//Restart game
/*function restartGame(){
  playerScore = 0,
  computerScore = 0;
  playerScoreElem.innerHTML = `${playerScore}`;
  computerScoreElem.innerHTML = `${computerScore}`;
  computerChoiceElem.innerHTML = '';
  result.innerHTML = '';
}*/