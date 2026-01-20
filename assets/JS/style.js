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
    for (let i = deck.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j]], deck[i];
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
            <div class"card ${card.color}" data-index="${index}">
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
    const top = discardPlie[discardPile.length - 1];

    const valid =
        selected.color === top.color ||
        selected.number === top.number;

    if(!valid); {
        alert("Invalid move!");
        return;
    }

    discardPile.push(selected);
    playerHand.splice(index, 1);

    updateTopCard();
    renderHand();

}


// Draw card button
drawBtn.addEventListener("click", () => {
    playerHandArea.innerHTML += "<div class='card red'>5</div>";
    console.log("Draw button clicked");
    // drawCard(); //you'll add this function soon
});

// PLACEHOLDER

function renderHand() {
    console.log("Rendering hand:", playerHand);
    //Later: update DOM with card elements
}

function updateTopCard() {
    console.log("Updating top card:", discardPile[discardPile.length - 1]);
    //Later: update DOM with the top discard card
}

// INITIAL SETUP

function initGame() {
    console.log("Game starting.....");

    // Later: create deck, shuffle, start discard pile
    // createDeck ();
    // shuffleDeck ();
    // discardPile.push(deck.pop());
    //updateTopCard();
}

initGame();