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


// EVENT LISTENER

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