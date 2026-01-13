function getHumanChoice() {
  return prompt("Choose Rock Paper or Scissors");
}

function getComputerChoice() {
  var choices = ["Rock", "Paper", "Scissors"];
  var choice = choices[Math.floor(Math.random() * 3)];
  console.log(choice);
  return choice;
}

function playGame() {
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
      if ((computerChoice = "rock")) {
        console.log("Paper Beats Rocks");
        humanScore++;
      } else {
        console.log("Scissors Beats Paper");
        computerScore++;
      }
    }

    if (humanChoice == "scissors") {
      if (computerChoice == "rock") {
        console.log("Rock beats Scissors");
        computerScore++;
      } else {
        console.log("Scissors beats Paper");
        humanScore++;
      }
    }

    console.log("Current Human Score is : ", humanScore);
    console.log("Current Computer Score is : ", computerScore);
  }

  let humanScore = 0;
  let computerScore = 0;
  const number_of_rounds = 5;

  while (number_of_rounds > 0) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}
