/*
Rock, Paper, Scissors game. TOP Project.
*/

// Function which will randomly return [R,P,S], gonna be used as computer choice
function getComputerChoice()
{
    // random number between 0 - 10
    let x = Math.random() * 10;
    let computerChoice = 0;
    // will split it into 3 cases: 0 to 3,33; 3,3 to 6,66; 6,66 to 10
    // each case will be one of the following R,P,S
    if( x < 3.33 )
        {
            computerChoice = "Rock"
        }
    else if ( x < 6.66)
        {
            computerChoice = "Paper"
        }
    else
        {
            computerChoice = "Scissors"
        }

    return computerChoice;
}

// Function which will play a single round of RPS
function singleRoundOfRPS(playerChoice, computerChoice)
{
    let gamePlayerChoice = playerChoice;
    gameComputerChoice = getComputerChoice()
    let playerScore = 0;
    let computerScore = 0;

    /* 
    For players who enter rock, ROCK or whatever. Converts it to Rock, Paper, Scissors
    */
    if (gamePlayerChoice.length === 4){ gamePlayerChoice = "Rock";}
    if (gamePlayerChoice.length === 5){ gamePlayerChoice = "Paper";}
    if (gamePlayerChoice.length === 8){ gamePlayerChoice = "Scissors";}
    
    if( gamePlayerChoice === gameComputerChoice )
    {
        //console.log("It's a TIE");
        console.log (gamePlayerChoice, "vs", gameComputerChoice);
        playerScore = playerScore + 0;
        computerScore = computerScore + 0;
    }
    else if ( gamePlayerChoice === "Rock" && gameComputerChoice != "Paper")
    {
        //console.log("Player won")
        console.log (gamePlayerChoice, "vs", gameComputerChoice);
        playerScore = playerScore + 1;
    }
    else if ( gamePlayerChoice === "Paper" && gameComputerChoice != "Scissors")
    {
        //console.log("Player won")
        console.log (gamePlayerChoice, "vs", gameComputerChoice);
        playerScore = playerScore + 1;
    }
    else if ( gamePlayerChoice === "Scissors" && gameComputerChoice != "Rock")
    {
       // console.log("Player won")
        console.log (gamePlayerChoice, "vs", gameComputerChoice);
        playerScore = playerScore + 1;
    }
    else {
        //console.log("Computer won")
        console.log (gamePlayerChoice, "vs", gameComputerChoice);
        computerScore = computerScore + 1;
    }
    
    let totalScore = [playerScore, computerScore]
    return totalScore;
    
    
}

function playGameOfRPS(playerSelection, computerSelection)
{
    let playerScore_u8 = 0;
    let computerScore_u8 = 0;
    // Plays the game of RPS up until 5 games.
   // for(i=1; i<=5;i++)
    {
        ret_score = singleRoundOfRPS(playerSelection, computerSelection)
        playerScore_u8 = ret_score[0] + playerScore_u8;
        computerScore_u8 = ret_score[1] + computerScore_u8;
        
    }
    if( playerScore_u8 > computerScore_u8)
    {
        console.log("Player has won out of 5 rounds. Final score", playerScore_u8, "to", computerScore_u8)
    }
    else if ( computerScore_u8 > playerScore_u8)
    {
        console.log("Computer has won out of 5 rounds. Final score", playerScore_u8, "to", computerScore_u8)
    }
    else if ( computerScore_u8 === playerScore_u8)
    {
        console.log("TIE. Final score", playerScore_u8, "to", computerScore_u8)
    }
        
}

function RPSgame(playerSelection, computerSelection)
{
    let playerScore_u8 = 0;
    let computerScore_u8 = 0;
    ret_score = singleRoundOfRPS(playerSelection, computerSelection)
    playerScore_u8 = ret_score[0] + playerScore_u8;
    computerScore_u8 = ret_score[1] + computerScore_u8;
    const p = document.createElement('p')
    if( playerScore_u8 > computerScore_u8)
    {
        
        p.innerText = `Player won.`
        outcomeDiv.appendChild(p)
        
        //score.innerHTML = "<div>Player won</div>"
    }
    else if ( computerScore_u8 > playerScore_u8)
    {
        p.innerText = `Computer won.`
        outcomeDiv.appendChild(p)
    }
    else if ( computerScore_u8 === playerScore_u8)
    {
        p.innerText = `TIE.`
        outcomeDiv.appendChild(p)
    }
}

const rockButton = document.querySelector('.page-RPS-ROCK')
const paperButton = document.querySelector('.page-RPS-PAPER')
const scissorsButton = document.querySelector('.page-RPS-SCISSORS')
const outcomeDiv = document.querySelector('.outcome')
rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "rock"
    RPSgame(playerSelection, computerSelection)
    
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "paper"
    RPSgame(playerSelection, computerSelection)
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "scissors"
    RPSgame(playerSelection, computerSelection)
});
