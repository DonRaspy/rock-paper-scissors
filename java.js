const choices = ["rock", "paper", "scissors"]
const tie = "Tie Round";
const playerWin = "You Win!";
const computerWin = "You Lose, Try again";

function game(){
    playRound();
    //play the game
    //play five rounds
    //console based
}

function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
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
console.log(input);
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
            
    
    
game();