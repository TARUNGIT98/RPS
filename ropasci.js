function playGame() {
  function getHumanChoice() {
    const input = prompt("Choose Rock, Paper or Scissors");
    console.log("Human chose", input);
    return input;
  }

  function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * 3)];
    console.log("Computer chose", choice);
    return choice;
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("It's a draw !");
      return;
    }
    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        console.log("Paper Beats Rock !");
        computerScore++;
      } else {
        console.log("Rock beats Scissors !");
        humanScore++;
      }
    }
    if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        console.log("Paper Beats Rocks");
        humanScore++;
      } else {
        console.log("Scissors Beats Paper");
        computerScore++;
      }
    }

    if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
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
  let number_of_rounds = 5;

  while (number_of_rounds > 0) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    number_of_rounds = number_of_rounds - 1;
  }

  humanScore > computerScore
    ? console.log("You won !")
    : humanScore < computerScore
    ? console.log("You lost !")
    : console.log("Miraculos Draw !");

  console.log("Game Over !");
}

playGame();
