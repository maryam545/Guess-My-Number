"use strict";
const number = Math.random();

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);
});
