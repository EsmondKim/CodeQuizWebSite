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
//   let lastScoreForTesting = 70001;
//   let lastFighterForTesting = "New high";
//   localStorage.setItem("lastFighterScore", lastScoreForTesting);
//   localStorage.setItem("lastFighter", lastFighterForTesting);
// };
// testScoreFunction();
//Area to change last score for testing

testLastScore = () => {
  if (localStorage.getItem("lastFighterScore") > currentTopScores[0]) {
    localStorage.setItem("score1", localStorage.getItem("lastFighterScore"));
    localStorage.setItem("fighter1", localStorage.getItem("lastFighter"));
  }
  if (localStorage.getItem("lastFighterScore") === currentTopScores[0]) {
    localStorage.setItem("score3", localStorage.getItem("score2"));
    localStorage.setItem("fighter3", localStorage.getItem("fighter2"));
    localStorage.setItem("score2", localStorage.getItem("lastFighterScore"));
    localStorage.setItem("fighter2", localStorage.getItem("lastFighter"));
  }
  if (lastScore > currentTopScores[1]) {
    localStorage.setItem("score3", current2Score);
    localStorage.setItem("fighter3", current2Initials);
    localStorage.setItem("score2", lastScore);
    localStorage.setItem("fighter2", lastFighter);
  }
  if (lastScore === currentTopScores[1]) {
    localStorage.setItem("score3", lastScore);
    localStorage.setItem("fighter3", lastFighter);
  }
  if (lastScore > currentTopScores[2]) {
    localStorage.setItem("score3", lastScore);
    localStorage.setItem("fighter3", lastFighter);
  }
  if (lastScore === currentTopScores[2]) {
    localStorage.setItem("score3", lastScore);
    localStorage.setItem("fighter3", lastFighter);
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
