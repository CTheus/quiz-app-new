// Get the bookmark buttons
const bookmarkButtons = document.querySelectorAll(".bookmark");

// Add click event listener to each bookmark button
bookmarkButtons.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.toggle("bookmark--active");
  });
});

// Get all answer buttons
const answerButtons = document.querySelectorAll(".card__button-answer");

// Add click event listener to each answer button
answerButtons.forEach((button) => {
  button.addEventListener("click", toggleAnswer);
});

function toggleAnswer() {
  const answer = this.nextElementSibling;
  answer.classList.toggle("hidden");
  this.textContent = answer.classList.contains("hidden")
    ? "Show answer"
    : "Hide answer";
}
