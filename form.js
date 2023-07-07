console.clear();

// form submit event
const form = document.querySelector('[data-js="add-card-form"]');
const cardList = document.querySelector('[data-js="card-list"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  // call the create new card function with the data from the form
  createCard(data);

  event.target.reset();
  event.target.elements.formQuestion.focus();

  // reset the counter value
  outputQuestion.textContent = 150;
  outputAnswer.textContent = 150;
});

// create new card function
function createCard(data) {
  //create new li
  const newCard = document.createElement("li");
  // add class to this li
  newCard.classList.add();
  // append li to the ul
  cardList.append(newCard);

  // add inner content to the li
  newCard.innerHTML = `
    <article class="card">
        <h2 class="card__question">
            ${data.formQuestion}
        </h2>
        <button class="card__button-answer" type="button" data-js="toggle-answer" aria-label="toggle answer"></button>
        <p class="card__answer" data-js="card-answer">
        ${data.formAnswer}
        </p>
        <ul class="card__tag-list">
            <li class="card__tag-list-item">
            ${data.formTags}
            </li>
        </ul>
        <div class="card__button-bookmark">
            <button class="bookmark" aria-label="bookmark" type="button" data-js="bookmark">
                <svg class="bookmark__icon" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24">
                    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                </svg>
            </button>
        </div>
    </article>
  `;
}

// count the characters that are left in answer and question input
const inputQuestion = document.querySelector('[data-js="form-question"]');
const outputQuestion = document.querySelector('[data-js="output-question"]');

const inputAnswer = document.querySelector('[data-js="form-answer"]');
const outputAnswer = document.querySelector('[data-js="output-answer"]');

// eventListener for the Question textarea
inputQuestion.addEventListener("input", () => {
  const output = outputQuestion;
  const length = inputQuestion.value.length;
  updateCounter(length, output);
});

// eventListener for the Answer textarea
inputAnswer.addEventListener("input", () => {
  const output = outputAnswer;
  const length = inputAnswer.value.length;
  updateCounter(length, output);
});

// function to count the characters that are left
function updateCounter(length, output) {
  const result = 150 - length;
  output.textContent = result;
}
