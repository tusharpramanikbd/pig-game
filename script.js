'use strict';

// Selecting elements
const score0Elm = document.querySelector('#score--0');
const score1Elm = document.querySelector('#score--1');
const diseElm = document.querySelector('.dice');

const initGameState = () => {
  score0Elm.textContent = 0;
  score1Elm.textContent = 0;

  diseElm.classList.add('hidden');
};

initGameState();
