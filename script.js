"use strict";
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ no number! ";
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "🎇 correct number! ";
    document.querySelector("body").style.background = "green";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 too high ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😕 you lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.background = "red";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 too low ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😕 you lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.background = "red";
    }
  }
});
