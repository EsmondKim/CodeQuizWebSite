let beginButtonEl = document.querySelector("#beginButton");
let correctChoiceEl = document.querySelector("#correctChoice");
let incorrectChoiceEl = document.querySelector("#incorrectChoice");
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

function beginKumite() {
    console.log("beginKumite");
    question1.classList.remove("hideQuestion");
    question1.classList.add("showQuestion");
    beginButton.classList.add("hideButton");
    startTimer();
}
//Start the clock function.
function startTimer() { 
    let interval = setInterval(function() {
    totalSeconds--;
    if (totalSeconds === 0) {
        clearInterval(interval);    
     }
     renderTime();
    }, 1000);
}  

function renderTime() {
minutesDisplay.textContent = getFormattedMinutes();
secondsDisplay.textContent = getFormattedSeconds();
}

function getFormattedMinutes() {
    let minutesLeft = Math.floor(totalSeconds / 60);
    if (minutesLeft < 1) {
        formattedMinutes = "0";
    }
    else {
        formattedMinutes = minutesLeft;
    }
    return formattedMinutes;
}
function getFormattedSeconds() {
    secondsLeft = ":" + (totalSeconds) % 60;
    let formattedSeconds = secondsLeft

    if (totalSeconds < 70 && totalSeconds > 59) {
        formattedSeconds = ":0" + (totalSeconds) % 60;
    }
    
    else if (totalSeconds < 10) {
        formattedSeconds = ":0" + (totalSeconds) % 60;
    }

    return formattedSeconds;
}

//Correct answer function, add time to the clock if correct, deduct if incorrect.
function correctAnswerSubmit() {   
    correctAnswer.classList.remove("hideCorrect");
    correctAnswer.classList.add("showCorrect");
    question1.classList.remove("showQuestion");
    question1.classList.add("hideQuestion");    
} 

function incorrectAnswerSubmit() {
    wrongAnswer.classList.remove("hideWrong");
    wrongAnswer.classList.add("showWrong");
    question1.classList.remove("showQuestion");
    question1.classList.add("hideQuestion");    
}

//Show next question function.
    //Here, consider an array with question1-10, and i increments each time a right or wrong answer screem is clicked.

//End the quiz function.
    //Quiz ends when timere hits 0,
    //or player wins if they complete question 10 with time left.

//High score from local storage function.

correctChoiceEl.addEventListener("click", correctAnswerSubmit);
incorrectChoiceEl.addEventListener("click", incorrectAnswerSubmit);
beginButtonEl.addEventListener("click", beginKumite);