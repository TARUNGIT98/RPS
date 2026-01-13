let humanScore = 0;
let computerScore = 0;
function getHumanChoice() {
  prompt("Choose Rock Paper or Scissors");
}
function getComputerChoice() {
  var choices = ["Rock", "Paper", "Scissors"];
  var choice = choices[Math.floor(Math.random() * 3)];
  console.log(choice);
  return choice;
}
function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
  computerChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("It's a draw");
  }
  if (humanChoice == "rock") {
    if ((computerChoice = "paper")) {
      console.log("Paper Beats Rock");
      computerScore++;
    } else {
      console.log("Rock beats Scissors");
      humanScore++;
    }
  }
  if (humanChoice == "paper") {
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
