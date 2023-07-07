console.clear();

// toggle bookmark icon on click
const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("bookmark--active");
});

// hide and show answer on click
const answerButton = document.querySelector('[data-js="toggle-answer"]');
const answer = document.querySelector('[data-js="card-answer"]');

answerButton.addEventListener("click", () => {
  answer.classList.toggle("card__answer--active");
  answerButton.classList.toggle("card__button-answer--hide");
});
