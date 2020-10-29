let beginButtonEl = document.querySelector("#beginButton");

let correctChoiceQ1El = document.querySelector("#correctChoiceQ1");
let incorrectChoiceQ1El = document.querySelector("#incorrectChoiceQ1");
let correctChoiceQ2El = document.querySelector("#correctChoiceQ2");
let incorrectChoiceQ2El = document.querySelector("#incorrectChoiceQ2");
let correctChoiceQ3El = document.querySelector("#correctChoiceQ3");
let incorrectChoiceQ3El = document.querySelector("#incorrectChoiceQ3");
let correctChoiceQ4El = document.querySelector("#correctChoiceQ4");
let incorrectChoiceQ4El = document.querySelector("#incorrectChoiceQ4");
let correctChoiceQ5El = document.querySelector("#correctChoiceQ5");
let incorrectChoiceQ5El = document.querySelector("#incorrectChoiceQ5");
let correctChoiceQ6El = document.querySelector("#correctChoiceQ6");
let incorrectChoiceQ6El = document.querySelector("#incorrectChoiceQ6");
let correctChoiceQ7El = document.querySelector("#correctChoiceQ7");
let incorrectChoiceQ7El = document.querySelector("#incorrectChoiceQ7");
let correctChoiceQ8El = document.querySelector("#correctChoiceQ8");
let incorrectChoiceQ8El = document.querySelector("#incorrectChoiceQ8");
let correctChoiceQ9El = document.querySelector("#correctChoiceQ9");
let incorrectChoiceQ9El = document.querySelector("#incorrectChoiceQ9");
let correctChoiceQ10El = document.querySelector("#correctChoiceQ10");
let incorrectChoiceQ10El = document.querySelector("#incorrectChoiceQ10");


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

//Creating an array to use in next question function.
let nextQuestion = [question1, question2];
let nextQuestionOperate = 0;
let nextQuestionIndex;
//Setting the initial time to start the game.
let totalSeconds = 120;

let playerScoreEl = document.querySelector("#playerScore");
playerScoreCount = 0;
let topHighScore = 0;
let secondHighScore = 0;
let thirdHighScore = 0;

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
    let interval = setInterval(function() {
    totalSeconds--;
    if (totalSeconds === 0) {
        clearInterval(interval);    
        gameOverFunc();
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
//Need to format seconds for single digits above 2:00 min. (Accounting for bonus seconds)
function getFormattedSeconds() {
    secondsLeft = ":" + (totalSeconds) % 60;
    let formattedSeconds = secondsLeft

    if (totalSeconds > 119 && totalSeconds < 130) {
        formattedSeconds = ":0" + (totalSeconds) % 60;
    }

    if (totalSeconds < 70 && totalSeconds > 59) {
        formattedSeconds = ":0" + (totalSeconds) % 60;
    }
    
    else if (totalSeconds < 10) {
        formattedSeconds = ":0" + (totalSeconds) % 60;
    }

    return formattedSeconds;
}

//Correct answer function, add time to the clock if correct, deduct if incorrect.
//Show next question function.
    //Here, consider an array with question1-10, and i increments each time a right or wrong answer screem is clicked.
    
    function correctAnswerSubmit() {   
        nextQuestionIndex.classList.remove("showQuestion");
        nextQuestionIndex.classList.add("hideQuestion");
        correctAnswer.classList.remove("hideCorrect");
        correctAnswer.classList.add("showCorrect");
    } 
    
    function incorrectAnswerSubmit() {
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
    
    function renderScore(){
        playerScoreEl.textContent = playerScoreCount;
        console.log(playerScoreCount);
    }
//End the quiz function.
//Quiz ends when timere hits 0, 
    function gameOverFunc() {
    console.log("game over");
    nextQuestionIndex.classList.remove("showQuestion");
    nextQuestionIndex.classList.add("hideQuestion");
    gameOverEl.classList.remove("hideGameOver");
    gameOverEl.classList.add("showGameOver");
//If statements to test for high scores 1-3.
    if (playerScoreCount > topHighScore && playerScoreCount > secondHighScore && playerScoreCount > thirdHighScore) {
        localStorage.setItem("highScore", playerScoreCount);
        let playerInitials1 = prompt("You kicked butt. Enter Your Initials.");
        localStorage.setItem("topInitials", playerInitials1);
        }
    if (playerScoreCount < topHighScore && playerScoreCount > secondHighScore && playerScoreCount > thirdHighScore) {
        localStorage.setItem("secondScore", playerScoreCount);
        let playerInitials2 = prompt("You kicked butt. Enter Your Initials.");
        localStorage.setItem("secondInitials", playerInitials2);
        }   
    if (playerScoreCount < topHighScore && playerScoreCount < secondHighScore && playerScoreCount > thirdHighScore) {
        localStorage.setItem("thirdScore", playerScoreCount);
        let playerInitials3 = prompt("You kicked butt. Enter Your Initials.");
        localStorage.setItem("thirdInitials", playerInitials3);
        }
    }
//Or player wins if they complete question 10 with time left.  
//Embed a specific question10 id to the correct answer to trigger the win screen.
//Wrong answer for question10 get a "try again" screen for question 10.

//Button click listeners.
correctChoiceQ1El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ1El.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ2El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ2El.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ3El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ3El.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ4El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ4El.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ5El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ5El.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ6El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ6El.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ7El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ7El.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ8El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ8El.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ9El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ9El.addEventListener("click", incorrectAnswerSubmit);

correctChoiceQ10El.addEventListener("click", correctAnswerSubmit);
incorrectChoiceQ10El.addEventListener("click", incorrectAnswerSubmit);

beginButtonEl.addEventListener("click", beginKumite);
kickAssEl.addEventListener("click", kickMoreAss);
builtForThisEl.addEventListener("click", moreBuiltForThis);
