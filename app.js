// API Endpoint.
const URL = "https://api.adviceslip.com/advice";

// DOM elements.
const adviceId = document.querySelector("#adv-id");
const adviceText = document.querySelector("#adv-text");
const btn = document.querySelector(".dice-container");

// for first window load, generate the advice.
getAdvice();

// on click generate new advice.
btn.addEventListener("click", () => {
  btn.classList.toggle("rotate");

  getAdvice();
});

// function to get new advice from API.
async function getAdvice() {
  const response = await fetch(URL);
  const data = await response.json();

  adviceId.innerText = data.slip.id;
  adviceText.innerText = `“${data.slip.advice}”`;
}
