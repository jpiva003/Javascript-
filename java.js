// function to output results of one round
function playRound() {
  if (computerChoice === playerChoice) {
    return "Tie";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "Player wins!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "Player wins!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "Player wins!";
  } else {
    return "Player loses!";
  }
}
// function to generate random number from 0-2
function randomNum() {
  return Math.floor(Math.random() * 3);
}
// function to convert random number into an output in string
let number = randomNum();
function computerChoice() {
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else if (number === 2) {
    return "scissors";
  }
}
