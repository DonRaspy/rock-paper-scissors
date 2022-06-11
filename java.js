const choices = ["rock", "paper", "scissors"]
const winners = [];
const tie = "Tie Round";
const playerWin = "You Win!";
const computerWin = "You Lose, Try again";


function game(){
    for (let i=1; i <= 5; i++){
    playRound(i);
    }
}

function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection,round, winner);
}

function playerChoice(){
   let input = prompt("Type Rock, Paper, or Scissors");
   while(input==null){
       input = prompt("Type Rock, Paper, or Scissors");
   }
  input = input.toLowerCase();
    let check = validateInput(input);
    while(check ==false){
        input = prompt("Type Rock, Paper, or Scissors");
    while (input == null){
        input= prompt ("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase;
    check = validateInput(input);
}
return input;
}

 function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
 }

function validateInput(choice){
    if (choices.includes(choice)){
        return true;
    } else return false;
        }

function checkWinner(computerChoice, playerChoice){
    if (playerChoice === computerChoice){
    return tie;
    } else if((computerChoice === "rock" && playerChoice == "scissors") ||
              (computerChoice === "paper" && playerChoice == "rock") ||
              (computerChoice === "scissors" && playerChoice == "paper")
    ){return computerWin;
        } else return playerWin;
              }

function logWins(){
    let playerWins = winners.filter((item) => item == playerWin).length;
    let computerWins = winners.filter((item) => item == computerWin).length;
    let tie = winners.filter((item) => item == tie).length;
    console.log("Results:");
    console.log("player wins:", playerWins);
    console.log("computer wins:", computerWins);
    console.log("Ties:", tie);
}
function logRound(playerChoice, computerChoice, winners, round){
    console.log("Round:", round);
    console.log("Player Choose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winners,"Won the Round")
    console.log("------------------------")
}
    
    
game();