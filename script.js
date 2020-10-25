

let beginButtonEl = document.querySelector("#beginButton");
let question1El = document.querySelector("#question1");

function beginKumite() {
    console.log("beginKumite");
    question1.classList.remove("hideQuestion");
    question1.classList.add("showQuestion");
}



beginButtonEl.addEventListener("click", beginKumite);
    

//Function to unhide question/will probably use .addClass and .removeClass
  
  //Function to check correctness of question
  
  //Function to show next question
  
  //Function to end the quiz.
  
  //Function using local storage to show the high score. -->



