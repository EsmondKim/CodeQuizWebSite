console.log("Hello world!");

let numberOneScoreEl = document.querySelector("#numberOneScore");
let numberTwoScoreEl = document.querySelector("#numberTwoScore");
let numberThreeScoreEl = document.querySelector("#numberThreeScore");

let numberOnePlayerEl = document.querySelector("#numberOnePlayer");
let numberTwoPlayerEl = document.querySelector("#numberTwoPlayer");
let numberThreePlayerEl = document.querySelector("#numberThreePlayer");

numberOneScoreEl.textContent = localStorage.getItem("highScore");
numberTwoScoreEl.textContent = localStorage.getItem("secondScore");
numberThreeScoreEl.textContent = localStorage.getItem("thirdScore");

numberOnePlayerEl.textContent = localStorage.getItem("topInitials");
numberTwoPlayerEl.textContent = localStorage.getItem("secondInitials");
numberThreePlayerEl.textContent = localStorage.getItem("thirdInitials");
