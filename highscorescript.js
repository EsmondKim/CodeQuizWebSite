console.log("Hello world!");

let lastFighterScoreEl = document.querySelector("#lastFighterScore");
let lastFighterEl = document.querySelector("#lastFighter");

lastFighterScoreEl.textContent = localStorage.getItem("lastFighterScore");
lastFighterEl.textContent = localStorage.getItem("lastFighter");
