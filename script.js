let beginButtonEl = document.querySelector("#beginButton");
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

let minutesDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");

let totalSeconds = 120;
let secondsElapsed = 0;
let minutesLeft = 0;
let interval;

function beginKumite() {
    console.log("beginKumite");
    question1.classList.remove("hideQuestion");
    question1.classList.add("showQuestion");
    beginButton.classList.add("hideButton");
    startTimer();
}
//Start the clock function.
function startTimer() {
    interval = setInterval(function() {
        secondsElapsed++;
        renderTime();
    }, 1000);
}
function getFormattedMinutes() {
    let secondsLeft = totalSeconds - secondsElapsed
    let minutesLeft = Math.floor(secondsLeft / 60);
    let formattedMinutes = minutesLeft;
    if (minutesLeft < 1) {
        formattedMinutes = "0";
    }
    else {
        formattedMinutes = minutesLeft;
    }
    return formattedMinutes;
}

function getFormattedSeconds() {
    let secondsLeft = ":" + (totalSeconds - secondsElapsed) % 60;
    if(secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    }
    else {
        formattedSeconds = secondsLeft;
    }
    return formattedSeconds;
}
function renderTime() {
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
}
//Correct answer function, add time to the clock if correct, deduct if incorrect.

//Show next question function.

//End the quiz function.

//High score from local storage function.

beginButtonEl.addEventListener("click", beginKumite);
    



