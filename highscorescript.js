// let lastFighterScoreEl = document.querySelector("#lastFighterScore");
// let lastFighterEl = document.querySelector("#lastFighter");

// lastFighterScoreEl.textContent = localStorage.getItem("lastFighterScore");
// lastFighterEl.textContent = localStorage.getItem("lastFighter");

let score2El = document.querySelector("#score2");
let score3El = document.querySelector("#score3");
let initials1El = document.querySelector("#initials1");
let initials2El = document.querySelector("#initials2");
let initials3El = document.querySelector("#initials3");

let lastFghtrScr = localStorage.getItem("lastFighterScore");
let lastFghtrIntl = localStorage.getItem("lastFighter");
let topScores = [700000, 500000, 250000];
let topFighters = ["EYK", "KMK", "OOK"];

renderTop3 = () => {
  //   let score1El = document.querySelector("#score1");
  //   score1El.textContent = topScores[0];

  let i = 1;
  topScores.forEach((score) => {
    let templateLiteralId = `#score${i}`;
    // let templateLiteralEl = `score${i}El`;
    templateLiteral = document.querySelector(templateLiteralId);
    console.log(templateLiteral);
    templateLiteral.textContent = score;
    console.log(score);
    i++;
    console.log("through loop once");
    console.log(i);
  });
};

renderTop3();

renderTopInitials = () => {
  //   let score1El = document.querySelector("#score1");
  //   score1El.textContent = topScores[0];

  let i = 1;
  topFighters.forEach((fighter) => {
    let templateLiteralId = `#initials${i}`;
    // let templateLiteralEl = `score${i}El`;
    templateLiteral = document.querySelector(templateLiteralId);
    console.log(templateLiteral);
    templateLiteral.textContent = fighter;
    console.log(fighter);
    i++;
    console.log("through loop once");
    console.log(i);
  });
};

renderTopInitials();

// topScores.map((score) => {
//   topScores((a, b) => b - a);
//   if (lastFghtrScr > score) {
//     topScores.slice(0, -1);
//     topFghtrs.slice(0, -1);
//     topScores.unshift(score);
//     topFghtrs.unshift(lastFghtrIntl);
//   }
//   if (lastFghtrScr === score) {
//     |
//   }
// });
