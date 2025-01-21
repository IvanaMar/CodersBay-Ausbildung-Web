const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScore = document.querySelector('.data-computer-score')
const myScore = document.querySelector('.data-my-score')

const selectionBoard = document.querySelector("#selection-board")


const SELECTIONS = [
    {
        name: 'rock',
        emoji: '🪨',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '📃',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: ' ✂️ ',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if(yourWinner) incrementScore(myScore)
    if(computerWinner) incrementScore(computerScore)
    if(checkWinner()) {
        //set both results on 0

        //const resultSelection = document.querySelector('.result-selection')
        myScore.innerHTML = '0'
        computerScore.innerText = '0'
        selectionBoard.innerHTML = ''
    }
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('result-selection-winner')
    selectionBoard.appendChild(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

function checkWinner() {
    const myResult = parseInt(myScore.innerHTML)
    const computerResult = parseInt(computerScore.innerHTML)
    if (myResult === 3 || computerResult === 3) {
        const winner =
            myResult === 3
                ? "You win the game! Congratulations! 🥳"
                : "Computer wins the game! Try again next time! 😔";
        alert(winner);
        return true;
    }
    return false;
}
