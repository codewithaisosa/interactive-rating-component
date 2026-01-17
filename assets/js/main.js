const ratingElem = document.querySelector('.rating');
const thanksElem = document.querySelector('.thank-you-container');
const scoreElem = document.querySelector('.score');
const ratingScores = document.querySelectorAll('[data-score]');
let rate;

document.addEventListener('click', handleClickEvent);

// This function handles all click event and perform the right action
function handleClickEvent(event) {
  const element = event.target;
  const action = element.dataset?.action;
  const score = element.dataset?.score;

  if (score) {
    selectedFn(score, element);
  }

  const actions = {
    'submit': submitFn
  }

  if (action) actions[action]();
}

// This function submits your rating
function submitFn() {
  rate ? (ratingElem.classList.add('hidden'), thanksElem.classList.remove('hidden'), rate = null) : null;
}

// This function updates selected button
function selectedFn(score, element) {
  rate = score;
  scoreElem.textContent = rate;
  for (const ratingScore of ratingScores) {
    (ratingScore === element) ? (ratingScore.classList.add('selected')) : (ratingScore.classList.remove('selected'));
  }
}
