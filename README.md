# SnapStack - Project Overview

SnapStack is a fast‑paced, colour‑matching card game built with HTML, CSS, and JavaScript. Players draw and play cards to match the colour or number of the top card in the discard pile. The goal is simple: clear your hand before the desk runs out.

This project was created as part of the Code Institute’s Front-End Development curriculum.

---

### 🎮 Features 

- Dynamic card deck generated with Javascript
- Shuffle, draw and play mechanics
- Color and number matching rules
- Interactive UI with clickable cards
- Responsive layout
- Clear visual feedback for valid and invalid moves
- Win conditions when the player's hand reaches zero
- Reset button to restart the game instantly

---

### 🛠️ Technologies used

- HTML
- CSS
- Javascript

---

### 🧩 How to play

- You begin with one card on the discard pile and a empty hand..
- Click **Draw Card** to add a card to your hand.
- Click a card in your hand to play it.
- You may only play a card if it matches the **colour** or **number** of the top discard card.
- Invalid moves triggers a notification.
- Continue drawing and playing until your hand is empty - then you win.
- Use **Rest Game** to start a new round at any time.


---

### 🧪 Testing

**Manual Testing**

- Page loads with no console errors
- Draw button adds cards correctly
- Invalid moves show an alert
- Valid moves update the discard pile
- Win conditions trigger when a hand is empty
- Reset button restarts the game clearly
- Layout remains responsive on mobile



**Bugs & Fixes**

- **Bug:** Reset button didn't clear the hand.  
**Fix:** Added *playerHand = []* inside reset event listener

- **Bug:** Invalid move alert triggered even when clicking a valid card.  
**Fix:** Corrected matching logic in *playCard().

**Validator Testing**

- HTML validated with W£C
- CSS validated with Jigsaw
- JavaScript checked with linter

---

### 🎨 UX & Design

**Color Palette**

To create a bright, accessible game enviroment

- 🔴 #e63946 (red)
- 🔵 #457b9d (blue)
- 🟢 #2a9d8f (green)
- 🟡 #e9c46a (yellow)

These colors offer strong contrast and clear visual grouping.

**Wireframe**


**Design Rationale**

- Large buttons and clear spacing improve accessibility
- Color-coded cards make gameplay intitive
- Layout proritises the discard pile and player hand
- Navigation is simple: Home → Play → Rules
- Clean, mimimal UI to keep focus on gameplay

---

### 🚀 Deployment

**Live Link:**

**Repository:**

Deployment steps:

1. Push all code to GitHub.
2. Got to **Setting → Pages.**
3. Select **main branch** and save
4. Wait for the site to buid.

---
### Credits

- All code written by me (Alison Mossop)
- Game concept inspired by **UNO** 

