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

let currentScore = 0;

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
    current0Elm.textContent = currentScore;
  } else {
    // TODO: update active player
  }
};

initGameState();
btnRoll.addEventListener('click', handleBtnRoll);
