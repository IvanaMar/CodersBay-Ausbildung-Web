
let player = {
    name: "Ivana",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum_id")
let cardsEl = document.getElementById("cards_id")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {

    let randomNumber =  Math.floor(Math.random()*13) + 1
    if(randomNumber === 1) {
        return 1
    }
    else if(randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {
        return 10
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firsCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firsCard, secondCard]
    sum = firsCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if(sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }

}
