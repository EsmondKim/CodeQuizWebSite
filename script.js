let beginButtonEl = document.querySelector("#beginButton");

let correctChoiceQ1El = document.querySelector("#correctChoiceQ1");
let incorrectChoiceQ1El = document.querySelector("#incorrectChoiceQ1");
let incorrectChoiceQ1AEl = document.querySelector("#incorrectChoiceQ1A");
let incorrectChoiceQ1BEl = document.querySelector("#incorrectChoiceQ1B");
let correctChoiceQ2El = document.querySelector("#correctChoiceQ2");
let incorrectChoiceQ2El = document.querySelector("#incorrectChoiceQ2");
let incorrectChoiceQ2AEl = document.querySelector("#incorrectChoiceQ2A");
let incorrectChoiceQ2BEl = document.querySelector("#incorrectChoiceQ2B");
let correctChoiceQ3El = document.querySelector("#correctChoiceQ3");
let incorrectChoiceQ3El = document.querySelector("#incorrectChoiceQ3");
let correctChoiceQ4El = document.querySelector("#correctChoiceQ4");
let incorrectChoiceQ4El = document.querySelector("#incorrectChoiceQ4");
let correctChoiceQ5El = document.querySelector("#correctChoiceQ5");
let incorrectChoiceQ5El = document.querySelector("#incorrectChoiceQ5");
let incorrectChoiceQ5AEl = document.querySelector("#incorrectChoiceQ5A");
let incorrectChoiceQ5BEl = document.querySelector("#incorrectChoiceQ5B");
let correctChoiceQ6El = document.querySelector("#correctChoiceQ6");
let incorrectChoiceQ6El = document.querySelector("#incorrectChoiceQ6");
let incorrectChoiceQ6AEl = document.querySelector("#incorrectChoiceQ6A");
let incorrectChoiceQ6BEl = document.querySelector("#incorrectChoiceQ6B");
let correctChoiceQ7El = document.querySelector("#correctChoiceQ7");
let incorrectChoiceQ7El = document.querySelector("#incorrectChoiceQ7");
let incorrectChoiceQ7AEl = document.querySelector("#incorrectChoiceQ7A");
let incorrectChoiceQ7BEl = document.querySelector("#incorrectChoiceQ7B");
let correctChoiceQ8El = document.querySelector("#correctChoiceQ8");
let incorrectChoiceQ8El = document.querySelector("#incorrectChoiceQ8");
let incorrectChoiceQ8AEl = document.querySelector("#incorrectChoiceQ8A");
let incorrectChoiceQ8BEl = document.querySelector("#incorrectChoiceQ8B");
let correctChoiceQ9El = document.querySelector("#correctChoiceQ9");
let incorrectChoiceQ9El = document.querySelector("#incorrectChoiceQ9");
let incorrectChoiceQ9AEl = document.querySelector("#incorrectChoiceQ9A");
let incorrectChoiceQ9BEl = document.querySelector("#incorrectChoiceQ9B");
let correctChoiceQ10El = document.querySelector("#correctChoiceQ10");
let incorrectChoiceQ10El = document.querySelector("#incorrectChoiceQ10");
let incorrectChoiceQ10AEl = document.querySelector("#incorrectChoiceQ10A");
let incorrectChoiceQ10BEl = document.querySelector("#incorrectChoiceQ10B");

let question1El = document.querySelector("#question1");
let question2El = document.querySelector("#question2");
let question3El = document.querySelector("#question3");
let question4El = document.querySelector("#question4");
let question5El = document.querySelector("#question5");
let question6El = document.querySelector("#question6");
let question7El = document.querySelector("#question7");
let question8El = document.querySelector("#question8");
let question9El = document.querySelector("#question9");
let question10El = document.querySelector("#question10");

let correctAnswerEl = document.querySelector("#correctAnswer");
let wrongAnswerEl = document.querySelector("#wrongAnswer");
let kickAssEl = document.querySelector("#kickAss");
let builtForThisEl = document.querySelector("#builtForThis");

let gameOverEl = document.querySelector("#gameOver");
let minutesDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");

let goodEndingEl = document.querySelector("#goodEnding");
let badEndingEl = document.querySelector("#badEnding");

let minutesEl = document.querySelector("#minutes");
let secondsEl = document.querySelector("#seconds");

//Creating an array to use in next question function.
let nextQuestion = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];
let nextQuestionOperate = 0;
let nextQuestionIndex;
//Setting the initial time to start the game.
let totalSeconds = 120;

let playerScoreEl = document.querySelector("#playerScore");
let playerScoreCount = 0;

if (localStorage.getItem("score1") === null) {
  let defaultTopScores = [700000, 500000, 250000];
  let defaultTopFighters = ["EYK", "KMK", "OOK"];
  setDefaultTopScores = () => {
    console.log("default top scores ran");
    let i = 1;
    defaultTopScores.forEach((score) => {
      let thisScore = `score${i}`;
      localStorage.setItem(thisScore, score);
      i++;
    });
    console.log("we set default top scores");
  };
  setDefaultTopScores();

  setDefaultTopFighters = () => {
    console.log("default top fighters ran");
    let i = 1;
    defaultTopFighters.forEach((fighter) => {
      let thisFighter = `fighter${i}`;
      localStorage.setItem(thisFighter, fighter);
      i++;
    });
    console.log("we set top fighters default");
  };
  setDefaultTopFighters();
}

function beginKumite() {
  console.log("beginKumite");
  console.log(nextQuestionOperate);
  nextQuestionIndex = nextQuestion[nextQuestionOperate];
  console.log(nextQuestionIndex);
  nextQuestionIndex.classList.remove("hideQuestion");
  nextQuestionIndex.classList.add("showQuestion");
  beginButton.classList.add("hideButton");
  startTimer();
}
//Start the clock function.
function startTimer() {
  interval = setInterval(function () {
    totalSeconds--;
    //set to -1 so clock shows 0:00 at end of game
    if (totalSeconds === -1) {
      gameOverFunc();
      clearInterval(interval);
    }
    renderTime();
  }, 1000);
}

function stopTheTimer() {
  clearInterval(interval);
}

function renderTime() {
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();
}

function getFormattedMinutes() {
  let minutesLeft = Math.floor(totalSeconds / 60);
  if (minutesLeft < 1) {
    formattedMinutes = "0";
  } else {
    formattedMinutes = minutesLeft;
  }
  return formattedMinutes;
}
//Need to format seconds for single digits above 2:00 min. (Accounting for bonus seconds)
function getFormattedSeconds() {
  secondsLeft = ":" + (totalSeconds % 60);
  let formattedSeconds = secondsLeft;

  if (totalSeconds > 119 && totalSeconds < 130) {
    formattedSeconds = ":0" + (totalSeconds % 60);
  }

  if (totalSeconds < 70 && totalSeconds > 59) {
    formattedSeconds = ":0" + (totalSeconds % 60);
  }

  if (totalSeconds < 10) {
    formattedSeconds = ":0" + (totalSeconds % 60);
  }
  return formattedSeconds;
}

//Correct answer function, add time to the clock if correct, deduct if incorrect.
//Show next question function.
//Here, consider an array with question1-10, and i increments each time a right or wrong answer screem is clicked.
function correctAnswerSubmit() {
  console.log("Correct Answer Submit");
  nextQuestionIndex.classList.remove("showQuestion");
  nextQuestionIndex.classList.add("hideQuestion");
  correctAnswer.classList.remove("hideCorrect");
  correctAnswer.classList.add("showCorrect");
}

function incorrectAnswerSubmit() {
  console.log("Incorrect answer submit.");
  nextQuestionIndex.classList.remove("showQuestion");
  nextQuestionIndex.classList.add("hideQuestion");
  wrongAnswer.classList.remove("hideWrong");
  wrongAnswer.classList.add("showWrong");
}

function kickMoreAss() {
  nextQuestionOperate++;
  console.log(nextQuestionOperate);
  nextQuestionIndex = nextQuestion[nextQuestionOperate];
  console.log(nextQuestionIndex);
  nextQuestionIndex.classList.remove("hideQuestion");
  nextQuestionIndex.classList.add("showQuestion");
  correctAnswer.classList.remove("showCorrect");
  correctAnswer.classList.add("hideCorrect");
  totalSeconds = totalSeconds + 5;
  playerScoreCount = playerScoreCount + 100000;
  renderScore();
}

function moreBuiltForThis() {
  nextQuestionOperate++;
  console.log(nextQuestionOperate);
  nextQuestionIndex = nextQuestion[nextQuestionOperate];
  console.log(nextQuestionIndex);
  nextQuestionIndex.classList.remove("hideQuestion");
  nextQuestionIndex.classList.add("showQuestion");
  wrongAnswer.classList.remove("showWrong");
  wrongAnswer.classList.add("hideWrong");
  totalSeconds = totalSeconds - 5;
  playerScoreCount = playerScoreCount - 50000;
  renderScore();
}

function renderScore() {
  playerScoreEl.textContent = playerScoreCount;
  console.log(playerScoreCount);
}
//End the quiz function.
//Quiz ends when timer hits 0,
function gameOverFunc() {
  console.log("game over");
  minutes.classList.add("hideMinutes");
  seconds.classList.add("hideSeconds");
  nextQuestionIndex.classList.remove("showQuestion");
  nextQuestionIndex.classList.add("hideQuestion");
  wrongAnswer.classList.remove("showWrong");
  wrongAnswer.classList.add("hideWrong");
  correctAnswer.classList.remove("showCorrect");
  correctAnswer.classList.add("hideCorrect");
  gameOverEl.classList.remove("hideGameOver");
  gameOverEl.classList.add("showGameOver");
  renderScore();

  let playerInitials = prompt("Game Over. Enter Your Initials.");
  localStorage.setItem("lastFighterScore", playerScoreCount);
  localStorage.setItem("lastFighter", playerInitials);
}

//Or player wins if they complete question 10 with time left.
function question10EnderCorrect() {
  playerScoreCount = playerScoreCount + 100000;
  nextQuestionIndex.classList.remove("showQuestion");
  nextQuestionIndex.classList.add("hideQuestion");
  renderScore();
  stopTheTimer();

  if (playerScoreCount > 0) {
    goodEnding.classList.remove("hideGoodEnding");
    goodEnding.classList.add("showGoodEnding");
  }
  if (playerScoreCount < 0) {
    badEnding.classList.remove("hideBadEnding");
    badEnding.classList.add("showBadEnding");
  }
  let playerInitials = prompt(
    "Yup, he won for The Last King of Scotland! Enter Your Initials."
  );
  localStorage.setItem("lastFighterScore", playerScoreCount);
  localStorage.setItem("lastFighter", playerInitials);
}

function question10EnderIncorrect() {
  playerScoreCount = playerScoreCount - 50000;
  nextQuestionIndex.classList.remove("showQuestion");
  nextQuestionIndex.classList.add("hideQuestion");
  renderScore();
  stopTheTimer();

  if (playerScoreCount > 0) {
    goodEnding.classList.remove("hideGoodEnding");
    goodEnding.classList.add("showGoodEnding");
  }
  if (playerScoreCount < 0) {
    badEnding.classList.remove("hideBadEnding");
    badEnding.classList.add("showBadEnding");
  }
  let playerInitials = prompt(
    "Nope, it was Last King of Scotland. Enter Your Initials."
  );
  localStorage.setItem("lastFighterScore", playerScoreCount);
  localStorage.setItem("lastFighter", playerInitials);
}

//Button click listeners.
correctChoiceQ1El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ1El.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ1AEl.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ1BEl.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ2El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ2El.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ2AEl.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ2BEl.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ3El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ3El.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ4El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ4El.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ5El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ5El.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ5AEl.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ5BEl.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ6El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ6El.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ6AEl.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ6BEl.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ7El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ7El.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ7AEl.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ7BEl.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ8El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ8El.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ8AEl.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ8BEl.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ9El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ9El.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ9AEl.addEventListener("click", incorrectAnswerSubmit);
incorrectChoiceQ9BEl.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ10El.addEventListener("click", question10EnderCorrect);
incorrectChoiceQ10El.addEventListener("click", question10EnderIncorrect);
incorrectChoiceQ10AEl.addEventListener("click", question10EnderIncorrect);
incorrectChoiceQ10BEl.addEventListener("click", question10EnderIncorrect);

beginButtonEl.addEventListener("click", beginKumite);
kickAssEl.addEventListener("click", kickMoreAss);
builtForThisEl.addEventListener("click", moreBuiltForThis);
