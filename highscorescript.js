// let lastFighterScoreEl = document.querySelector("#lastFighterScore");
// let lastFighterEl = document.querySelector("#lastFighter");

// lastFighterScoreEl.textContent = localStorage.getItem("lastFighterScore");
// lastFighterEl.textContent = localStorage.getItem("lastFighter");

let lastFghtrScr = localStorage.getItem("lastFighterScore");
let lastFghtrIntl = localStorage.getItem("lastFighter");
let topScores = [700000, 500000, 250000];
let topFghtrs = [EYK, KMK, OOK];

topScores.map((score) => {
  topScores((a, b) => b - a);
  if (lastFghtrScr > score) {
    topScores.slice(0, -1);
    topFghtrs.slice(0, -1);
    topScores.unshift(score);
    topFghtrs.unshift(lastFghtrIntl);
  }
});
