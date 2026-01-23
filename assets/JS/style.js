//  Draw button
const drawBtn = document.getElementById("draw-btn");

//Player hand container
const playerHandArea = document.getElementById("player-hand");

//Discard pile top card
const topCardSlot = document.getElementById("top-card");

//GAME STATE
let deck = [];
let playerHand = [];
let discardPile = [];

//CREATE DECK
function createDeck() {
    const colors = ["red", "blue", "green", "yellow"];
    const newDeck = [];

    colors.forEach(color => {
        for (let i = 0; i <= 9; i++) {
            newDeck.push({ color: color, number: i });
        }
    })

    return newDeck;
}

//SHUFFLE DECK
function shuffleDeck(deck) {
    for (let i = deck.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

//RENDER TOP CARD
function updateTopCard() {
    const top = discardPile[discardPile.length -1];
    topCardSlot.innerHTML = `<div class="card ${top.color}">${top.number}</div>`;
}

//RENDER PLAYER HAND
function renderHand() {
    playerHandArea.innerHTML = "";

    playerHand.forEach((card, index) => {
        const cardHTML = `
            <div class="card ${card.color}" data-index="${index}">
                ${card.number}
            </div>
         `;
         playerHandArea.innerHTML += cardHTML;
  })

  enableCardClicks();
}

//ENABLE CLICKING ON CARDS
function enableCardClicks() {
    const cards = document.querySelectorAll("#player-hand .card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const index = card.getAttribute("data-index");
            playCard(index);
        })
    })
}

//PLAY A CARD
function playCard(index) {
    const selected = playerHand[index];
    const top = discardPile[discardPile.length - 1];

    const valid =
        selected.color === top.color ||
        selected.number === top.number;

    if(!valid) {
        alert("Invalid move!");
        return;
    }

    discardPile.push(selected);
    playerHand.splice(index, 1);

    updateTopCard();
    renderHand();
    checkWin();
}

function checkWin() {
    if (playerHand.length === 0) {
        alert("You win! Your hand is empty!");
    }
}


// DRAW A REAL CARD
drawBtn.addEventListener("click", () => {
    if (deck.length === 0) {
        alert("Deck is empty");
        return;
    }

    const drawnCard = deck.pop();
    playerHand.push(drawnCard);

    renderHand();

});

//RESET GAME BUTTON
const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
    initGame();
    playerHand = [];
    renderHand();
});


// INITIAL SETUP

function initGame() {
    console.log("Game starting.....");

    deck = createDeck();
    shuffleDeck(deck);

    // Start discard pile with one card
    discardPile.push(deck.pop());
    updateTopCard();
}

initGame();