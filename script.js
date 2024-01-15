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

let finalScores, currentScore, activePlayer, isPlaying;

const initGameState = () => {
  finalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  score0Elm.textContent = 0;
  score1Elm.textContent = 0;
  current0Elm.textContent = 0;
  current1Elm.textContent = 0;

  diceElm.classList.add('hidden');

  player0Elm.classList.remove('player--winner');
  player1Elm.classList.remove('player--winner');

  player0Elm.classList.add('player--active');
  player1Elm.classList.remove('player--active');
};

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Elm.classList.toggle('player--active');
  player1Elm.classList.toggle('player--active');
};

const handleBtnRoll = () => {
  if (!isPlaying) return;

  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  diceElm.classList.remove('hidden');
  diceElm.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
};

const handleBtnHold = () => {
  if (!isPlaying) return;

  finalScores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    finalScores[activePlayer];

  if (finalScores[activePlayer] >= 10) {
    isPlaying = false;
    diceElm.classList.add('hidden');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  } else {
    switchPlayer();
  }
};

initGameState();
btnRoll.addEventListener('click', handleBtnRoll);
btnHold.addEventListener('click', handleBtnHold);
btnNew.addEventListener('click', initGameState);
