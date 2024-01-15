'use strict';

// Selecting elements
const score0Elm = document.querySelector('#score--0');
const score1Elm = document.querySelector('#score--1');

const diceElm = document.querySelector('.dice');

const current0Elm = document.getElementById('current--0');
const current1Elm = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0Elm = document.querySelector('.player--0');
const player1Elm = document.querySelector('.player--1');

const finalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const initGameState = () => {
  score0Elm.textContent = 0;
  score1Elm.textContent = 0;

  diceElm.classList.add('hidden');
};

const handleBtnRoll = () => {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  diceElm.classList.remove('hidden');
  diceElm.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0Elm.classList.toggle('player--active');
    player1Elm.classList.toggle('player--active');
  }
};

initGameState();
btnRoll.addEventListener('click', handleBtnRoll);
