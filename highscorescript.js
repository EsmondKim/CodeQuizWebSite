let currentTopScores = [];
let currentTopFighters = [];

createScoreArray = () => {
  for (let i = 1; i < 4; i++) {
    let thisScore = `score${i}`;
    let getScore = localStorage.getItem(thisScore);
    currentTopScores.push(getScore);
  }
};
createScoreArray();
console.log(currentTopScores);

createFighterArray = () => {
  for (let i = 1; i < 4; i++) {
    let thisFighter = `fighter${i}`;
    let getFighter = localStorage.getItem(thisFighter);
    currentTopFighters.push(getFighter);
  }
};
createFighterArray();
console.log(currentTopFighters);

//Area to change last score for testing
// testScoreFunction = () => {
//   let lastScoreForTesting = 650050;
//   let lastFighterForTesting = "New new new 3!";
//   localStorage.setItem("lastFighterScore", lastScoreForTesting);
//   localStorage.setItem("lastFighter", lastFighterForTesting);
// };
// testScoreFunction();
//Area to change last score for testing

let lastScore = localStorage.getItem("lastFighterScore");
let lastFighterInitials = localStorage.getItem("lastFighter");
let current1Score = localStorage.getItem("score1");
let current1Fighter = localStorage.getItem("fighter1");
let current2Score = localStorage.getItem("score2");
let current2Fighter = localStorage.getItem("fighter2");

testLastScore = () => {
  if (lastScore > currentTopScores[0]) {
    localStorage.setItem("score1", lastScore);
    localStorage.setItem("fighter1", lastFighterInitials);
    window.location.reload();
  }
  if (lastScore > currentTopScores[1] && lastScore < current1Score) {
    localStorage.setItem("score3", current2Score);
    localStorage.setItem("fighter3", current2Fighter);
    localStorage.setItem("score2", lastScore);
    localStorage.setItem("fighter2", lastFighterInitials);
    window.location.reload();
  }
  if (lastScore > currentTopScores[2] && lastScore < current2Score) {
    localStorage.setItem("score3", lastScore);
    localStorage.setItem("fighter3", lastFighterInitials);
    window.location.reload();
  }
};
testLastScore();

renderTop3 = () => {
  let i = 1;
  currentTopScores.forEach((score) => {
    let templateLiteralId = `#score${i}`;
    templateLiteral = document.querySelector(templateLiteralId);
    templateLiteral.textContent = score;
    i++;
  });
};
renderTop3();

renderTopInitials = () => {
  let i = 1;
  currentTopFighters.forEach((fighter) => {
    let templateLiteralId = `#initials${i}`;
    templateLiteral = document.querySelector(templateLiteralId);
    templateLiteral.textContent = fighter;
    i++;
  });
};
renderTopInitials();
