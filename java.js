// function to output results of one round
function playRound() {
  if (computerChoice === playerAnswer) {
    return "Tie";
  } else if (playerAnswer === "rock" && computerChoice === "scissors") {
    return "Player wins!";
  } else if (playerAnswer === "paper" && computerChoice === "rock") {
    return "Player wins!";
  } else if (playerAnswer === "scissors" && computerChoice === "paper") {
    return "Player wins!";
  } else {
    return "Player loses!";
  }
}
// function to generate random number
function generateComputerChoice() {
  return Math.floor(Math.random() * 3);
}
let number = generateComputerChoice();
console.log(number);
// function to return string using random number for computerChoice
function returnString() {
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else if (number === 2) {
    return "scissors";
  }
}
let computerChoice = returnString();
console.log(computerChoice);
// function to take in playerChoice
let playerAnswer = window.prompt(`Enter a string "rock" "paper" or "scissors"`);
console.log(playerAnswer);
console.log(playRound());
