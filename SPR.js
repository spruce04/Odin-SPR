//dom targets
const pScore = document.getElementById("pDisplay")
const cScore = document.getElementById("cDisplay")
const scissors = document.getElementById("scissors")
const paper = document.getElementById("paper")
const rock = document.getElementById("rock")
const result = document.getElementById("displayResult")

//some initial setup
let playerScore = 0
let computerScore = 0
pScore.textContent = playerScore
cScore.textContent = computerScore
let computerSelect

//listen for clicks
scissors.addEventListener("click", function() {
    computerSelect = computerPlay()
    playerSelect = 'scissors'
    playRound(computerSelect, playerSelect)
})

paper.addEventListener("click", function() {
    computerSelect = computerPlay()
    playerSelect = 'paper'
    playRound(computerSelect, playerSelect)
})
rock.addEventListener("click", function() {
    computerSelect = computerPlay()
    playerSelect = 'rock'
    playRound(computerSelect, playerSelect)
})

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

//play a round
function playRound(computerSelect, playerSelect) {
    if (playerSelect == 'rock') {
        if (computerSelect == 'scissors') {
            result.textContent = 'Rock smashes scissors. You Win!'
            result.style.color = '#009B77'
            playerScore = playerScore + 1
            pScore.textContent = playerScore
        }
        else if (computerSelect == 'paper') {
            result.textContent = 'Paper smothers rock. You lose...'
            result.style.color = '#e53d00'
            computerScore = computerScore + 1
            cScore.textContent = computerScore
        }
        else {
            result.textContent = "It's a draw!"
            result.style.color = 'white'
        }
    }
    else if (playerSelect == 'scissors') {
        if (computerSelect == 'rock') {
            result.textContent = 'Rock smashes scissors. You lose...'
            result.style.color = '#e53d00'
            computerScore = computerScore + 1
            cScore.textContent = computerScore
        }
        else if (computerSelect == 'paper') {
            result.textContent = 'Scissors slices paper. You Win!'
            result.style.color = '#009B77'
            playerScore = playerScore + 1
            pScore.textContent = playerScore
        }
        else {
            result.textContent = "It's a draw!"
            result.style.color = 'white'
        }
    }
    else if (playerSelect == 'paper') {
        if (computerSelect == 'rock') {
            result.textContent = 'Paper smothers rock. You Win!'
            result.style.color = '#009B77'
            playerScore = playerScore + 1
            pScore.textContent = playerScore
        }
        else if (computerSelect == 'scissors') {
            result.textContent = 'Scissors slices paper. You lose...'
            result.style.color = '#e53d00'
            computerScore = computerScore + 1
            cScore.textContent = computerScore
        }
        else {
            result.textContent = "It's a draw!"
            result.style.color = 'white'
        }
    }
}

