const flashcardContainer = document.querySelector(".flashcard-container");

const toggleButton = document.querySelector(".toggle-button");

let pertanyaan = "What is the capital of Indonesia?";
let jawaban = "Jakarta";

// Toggle the answer when the toggle button is clicked.
toggleButton.addEventListener("click", () => {
  if (flashcardContainer.classList.contains("show-answer")) {
    flashcardContainer.classList.remove("show-answer");
  } else {
    flashcardContainer.classList.add("show-answer");
  }
});

flashcardContainer.innerHTML = `
  <h4 class="pertanyaan">${pertanyaan}</h4>
  <p class="jawaban" hidden>${jawaban}</p>
`;
