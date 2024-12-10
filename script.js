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

 console.log(choicePrompt);//TESTING
 if (choicePrompt === "ROCK" || choicePrompt === "PAPER" || choicePrompt === "SCISSORS") {
 return choicePrompt;
 }
 else {
   alert("Choose again");
   return getHumanChoice();
 }
}


function playRound(humanChoice, computerChoice) {
  while (humanChoice == 'ROCK') {
    if (computerChoice == 'ROCK') {
      console.log(`${humanChoice} draws with ${computerChoice}`);
      break;
      }
      else if (computerChoice == 'PAPER') {
        console.log(`${humanChoice} loses to ${computerChoice}`);
        computerScore++;
        break;
      } else {
      console.log(`${humanChoice} beats ${computerChoice}`);
      humanScore++;
      break;
      }
    }
    while (humanChoice == 'PAPER') {
      if (computerChoice == 'PAPER') {
        console.log(`${humanChoice} draws with ${computerChoice}`); 
        break;
        }
        else if (computerChoice == 'SCISSORS') {
          console.log(`${humanChoice} loses to ${computerChoice}`);
          computerScore++;
          break;
        } else {
        console.log(`${humanChoice} beats ${computerChoice}`);
        humanScore++;
        break;
        }
    }
    while (humanChoice == 'SCISSORS') {
    if (computerChoice == 'SCISSORS') {
      console.log(`${humanChoice} draws with ${computerChoice}`); 
      break;
      }
      else if (computerChoice == 'ROCK') {
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
