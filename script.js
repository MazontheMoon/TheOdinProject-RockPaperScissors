let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
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

function getComputerChoice() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
  computerChoice = getComputerChoice();
  while (humanChoice == "ROCK") {
    if (computerChoice == "ROCK") {
      console.log(`${humanChoice} draws with ${computerChoice}`);
      score.textContent += `${roundCounter}: ${humanChoice} draws with ${computerChoice}`;
      scoreComputer.textContent += computerScore;
      scorePlayer.textContent += humanScore;
      break;
    } else if (computerChoice == "PAPER") {
      console.log(`${humanChoice} loses to ${computerChoice}`);
      score.textContent = `${humanChoice} draws with ${computerChoice}`;
      computerScore++;
      break;
    } else {
      console.log(`${humanChoice} beats ${computerChoice}`);
      score.textContent = `${humanChoice} draws with ${computerChoice}`;
      humanScore++;
      break;
    }
  }
  while (humanChoice == "PAPER") {
    if (computerChoice == "PAPER") {
      console.log(`${humanChoice} draws with ${computerChoice}`);
      score.textContent = `${humanChoice} draws with ${computerChoice}`;
      break;
    } else if (computerChoice == "SCISSORS") {
      console.log(`${humanChoice} loses to ${computerChoice}`);
      score.textContent = `${humanChoice} loses to ${computerChoice}`;
      computerScore++;
      break;
    } else {
      console.log(`${humanChoice} beats ${computerChoice}`);
      score.textContent = `${humanChoice} loses to ${computerChoice}`;
      humanScore++;
      break;
    }
  }
  while (humanChoice == "SCISSORS") {
    if (computerChoice == "SCISSORS") {
      console.log(`${humanChoice} draws with ${computerChoice}`);
      score.textContent = `${humanChoice} draws with ${computerChoice}`;
      break;
    } else if (computerChoice == "ROCK") {
      console.log(`${humanChoice} loses to ${computerChoice}`);
      score.textContent = `${humanChoice} loses to ${computerChoice}`;
      computerScore++;
      break;
    } else {
      console.log(`${humanChoice} beats ${computerChoice}`);
      score.textContent = `${humanChoice} beats ${computerChoice}`;
      humanScore++;
      break;
    }
  }
  roundCounter++;
}

if (roundCounter >= 5) {
  roundCounter = 0;
  humanScore = 0;
  computerScore = 0;
}
/*
function playGame () {
  for(let i = 1; i <=5; i++) {
		humanChoice = getHumanChoice();
		computerChoice = getComputerChoice();
		playRound(humanChoice, computerChoice);
    console.log(`Round ${i} Player score: ${humanScore}`);
    console.log(`Round ${i} Computer score: ${computerScore}`);
	}
  humanScore = 0;
  computerScore = 0;
}

playGame();
*/

/* CONSOLE ONLY VERSION

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
