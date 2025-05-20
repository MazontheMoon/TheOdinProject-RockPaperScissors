let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const score = document.getElementById("score");
const scoreComputer = document.getElementById("scoreComputer");
const scorePlayer = document.getElementById("scorePlayer");

btnRock.addEventListener("click", () => playRound("ROCK"));
btnPaper.addEventListener("click", () => playRound("PAPER"));
btnScissors.addEventListener("click", () => playRound("SCISSORS"));

function playRound(humanChoice) {
  computerChoice = getComputerChoice();
  score.textContent = "";
  while (humanChoice == "ROCK") {
    if (computerChoice == "ROCK") {
      score.textContent += `${humanChoice} draws with ${computerChoice}`;
      scoreComputer.textContent = computerScore;
      scorePlayer.textContent = humanScore;
      break;
    } else if (computerChoice == "PAPER") {
      score.textContent = `${humanChoice} loses to ${computerChoice}`;
      computerScore++;
      scoreComputer.textContent = computerScore;
      scorePlayer.textContent = humanScore;
      break;
    } else {
      score.textContent = `${humanChoice} beats ${computerChoice}`;
      humanScore++;
      scoreComputer.textContent = computerScore;
      scorePlayer.textContent = humanScore;
      break;
    }
  }
  while (humanChoice == "PAPER") {
    if (computerChoice == "PAPER") {
      score.textContent = `${humanChoice} draws with ${computerChoice}`;
      scoreComputer.textContent = computerScore;
      scorePlayer.textContent = humanScore;
      break;
    } else if (computerChoice == "SCISSORS") {
      score.textContent = `${humanChoice} loses to ${computerChoice}`;
      computerScore++;
      scoreComputer.textContent = computerScore;
      scorePlayer.textContent = humanScore;
      break;
    } else {
      score.textContent = `${humanChoice} beats ${computerChoice}`;
      humanScore++;
      scoreComputer.textContent = computerScore;
      scorePlayer.textContent = humanScore;
      break;
    }
  }
  while (humanChoice == "SCISSORS") {
    if (computerChoice == "SCISSORS") {
      score.textContent = `${humanChoice} draws with ${computerChoice}`;
      scoreComputer.textContent = computerScore;
      scorePlayer.textContent = humanScore;
      break;
    } else if (computerChoice == "ROCK") {
      score.textContent = `${humanChoice} loses to ${computerChoice}`;
      computerScore++;
      scoreComputer.textContent = computerScore;
      scorePlayer.textContent = humanScore;
      break;
    } else {
      score.textContent = `${humanChoice} beats ${computerChoice}`;
      humanScore++;
      scoreComputer.textContent = computerScore;
      scorePlayer.textContent = humanScore;
      break;
    }
  }

  if (humanScore == 5) {
    score.textContent = "Player wins Game!";
    humanScore = 0;
    computerScore = 0;
    scoreComputer.textContent = computerScore;
    scorePlayer.textContent = humanScore;
  }

  if (computerScore == 5) {
    score.textContent = "Computer wins Game!";
    humanScore = 0;
    computerScore = 0;
    scoreComputer.textContent = computerScore;
    scorePlayer.textContent = humanScore;
  }
}

function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * 3)];
}

/***********************
* CONSOLE ONLY VERSION *
************************

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choicePrompt = prompt("Choose Rock, Paper or Scissors?").toUpperCase();

  console.log(choicePrompt); //TESTING
  if (
    choicePrompt === "ROCK" ||
    choicePrompt === "PAPER" ||
    choicePrompt === "SCISSORS"
  ) {
    return choicePrompt;
  } else {
    alert("Choose again");
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  while (humanChoice == "ROCK") {
    if (computerChoice == "ROCK") {
      console.log(`${humanChoice} draws with ${computerChoice}`);
      break;
    } else if (computerChoice == "PAPER") {
      console.log(`${humanChoice} loses to ${computerChoice}`);
      computerScore++;
      break;
    } else {
      console.log(`${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;
    }
  }
  while (humanChoice == "PAPER") {
    if (computerChoice == "PAPER") {
      console.log(`${humanChoice} draws with ${computerChoice}`);
      break;
    } else if (computerChoice == "SCISSORS") {
      console.log(`${humanChoice} loses to ${computerChoice}`);
      computerScore++;
      break;
    } else {
      console.log(`${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;
    }
  }
  while (humanChoice == "SCISSORS") {
    if (computerChoice == "SCISSORS") {
      console.log(`${humanChoice} draws with ${computerChoice}`);
      break;
    } else if (computerChoice == "ROCK") {
      console.log(`${humanChoice} loses to ${computerChoice}`);
      computerScore++;
      break;
    } else {
      console.log(`${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;
    }
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Round ${i} Player score: ${humanScore}`);
    console.log(`Round ${i} Computer score: ${computerScore}`);
  }
  humanScore = 0;
  computerScore = 0;
}

//playGame();
*/
