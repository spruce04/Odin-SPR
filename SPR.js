//scissors paper rock, played in the command line/console
const user = prompt('Welcome, player! Please enter your name: ')
const validChoice = ['scissors', 'paper', 'rock'];
let playerScore = 0
let computerScore = 0

//determine the choice of the computer
function computerPlay() {
    let compChoice
    let compNumber = Math.floor(Math.random() * 3)
    switch (compNumber) {
        case 0:
            compChoice = 'scissors'
            break;
        case 1:
            compChoice = 'paper';
            break;
        case 2:
           compChoice = 'rock';
            break;
    } 
    return compChoice
}

//determine the choice of the player
function playerSelection() {
    let playerChoice = prompt(`${user}, choose Scissors, Paper, or Rock: `).toLowerCase()
    if (validChoice.indexOf(playerChoice) == -1) {
        alert('Please enter a valid option.')
        playerSelection()
    }
    else {
        return playerChoice
    }
}

//play again
function continuePlay() {
    keepPlay = prompt('Would you like to play again? Please enter Yes or No.').toLowerCase()
    if (keepPlay == 'yes') {
        console.log('playing again...')
        return 'yes'
    }
    else if (keepPlay == 'no') {
        throw new Error("Quitting game. Thanks for playing!");
    }
    else {
        alert('Please enter a valid option.')
        continuePlay()
    }
}


//play a round
function playRound(computerSelect, playerSelect) {
    if (playerSelect == 'rock') {
        if (computerSelect == 'scissors') {
            alert('Rock smashes scissors. You Win!')
            playerScore = playerScore + 1
            alert(`Score: ${user} has ${playerScore} points. Computer has ${computerScore} points.`)
        }
        else if (computerSelect == 'paper') {
            alert('Paper smothers rock. You lose...')
            computerScore = computerScore + 1
            alert(`Score: ${user} has ${playerScore} points. Computer has ${computerScore} points.`)
        }
        else {
            alert(`You both chose ${playerSelect}. It's a draw!`)
            alert(`Score: ${user} has ${playerScore} points. Computer has ${computerScore} points.`)
        }
    }
    else if (playerSelect == 'scissors') {
        if (computerSelect == 'rock') {
            alert('Rock smashes scissors. You lose...')
            computerScore = computerScore + 1
            alert(`Score: ${user} has ${playerScore} points. Computer has ${computerScore} points.`)
        }
        else if (computerSelect == 'paper') {
            alert('Scissors slices paper. You win!')
            playerScore = playerScore + 1
            alert(`Score: ${user} has ${playerScore} points. Computer has ${computerScore} points.`)
        }
        else {
            alert(`You both chose ${playerSelect}. It's a draw!`)
            alert(`Score: ${user} has ${playerScore} points. Computer has ${computerScore} points.`)
        }
    }
    else if (playerSelect == 'paper') {
        if (computerSelect == 'rock') {
            alert('Paper smothers rock. You win!')
            playerScore = playerScore + 1
            alert(`Score: ${user} has ${playerScore} points. Computer has ${computerScore} points.`)
        }
        else if (computerSelect == 'scissors') {
            alert('Scissors slices paper. You lose...')
            computerScore = computerScore + 1
            alert(`Score: ${user} has ${playerScore} points. Computer has ${computerScore} points.`)
        }
        else {
            alert(`You both chose ${playerSelect}. It's a draw!`)
            alert(`Score: ${user} has ${playerScore} points. Computer has ${computerScore} points.`)
        }
    }
    //determine if the game will continue
    continuePlay()
}

//loop game
while (true) {
    let computerSelect = computerPlay()
    let playerSelect = playerSelection()
    playRound(computerSelect, playerSelect)
}