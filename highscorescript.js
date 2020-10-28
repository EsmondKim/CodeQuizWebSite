console.log("Hello world!");

let numberOneScoreEl = document.querySelector("#numberOneScore");
let numberTwoScoreEl = document.querySelector("#numberTwoScore");
let numberThreeScoreEl = document.querySelector("#numberThreeScore");

numberOneScoreEl.textContent = localStorage.getItem("highScore" "topInitials");
numberTwoScoreEl.textContent = localStorage.getItem("secondScore" "secondInitials");
numberThreeScoreEl.textContent = localStorage.getItem("thirdScore" "thirdInitials");

