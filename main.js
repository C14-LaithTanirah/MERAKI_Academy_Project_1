const welcomePage = document.querySelector("#welcomePage");
const welcomePagecssObj = window.getComputedStyle(welcomePage);
let welcomePageDisplay = welcomePagecssObj.getPropertyValue("display");

let clickSound = document.querySelector("#audio");
let Sound = document.querySelector("#sound");

const Game = document.querySelector("#Game");
const GamecssObj = window.getComputedStyle(Game);
let Gamedisplay = GamecssObj.getPropertyValue("display");

const name1 = document.querySelector("#name1");
const player1 = document.getElementById("palyer1");
const h1Name1 = document.createElement("h1");

const name2 = document.querySelector("#name2");
const player2 = document.getElementById("palyer2");
const h1Name2 = document.createElement("h1");
const winnerPlayerH1 = document.createElement("h1");

const winnerPage = document.querySelector("#winnerPage");
const winnercssObj = window.getComputedStyle(winnerPage);
let winnerdisplay = winnercssObj.getPropertyValue("display");

const winnerPlayer = document.querySelector("#winnerPlayer");
const scorePlayer = document.querySelector("#scorePlayer");
const scorePlayer1 = document.createElement("h1");
scorePlayer1.id = "input1";

let scoreP1 = 0;
let scoreP2 = 0;

const score1 = document.querySelector("#scoreP1");
score1.innerText = `SCORE : ${scoreP1}`;

const score2 = document.querySelector("#scoreP2");
score2.innerText = `SCORE : ${scoreP2}`;

const playAganeButton = document.querySelector("#playAgane");
playAganeButton.addEventListener("click", () => {
  clickSound.play();
  const cell = document.querySelectorAll(".inputBox");
  cell.forEach((e, i) => {
    e.innerText = i;
    turn = "x";
    oSoulution = [];
    xSoulution = [];
  });
  score1.innerText = `SCORE : ${scoreP1}`;
  score2.innerText = `SCORE : ${scoreP2}`;
  winnerPage.style.display = "none";
  Game.style.display = "block";
});

const playButton = document.querySelector("#play");
playButton.addEventListener("click", () => {
  clickSound.play();
  if (welcomePageDisplay === "block") {
    name1.append(h1Name1);
    h1Name1.id = "input1";
    h1Name1.innerText = player1.value;

    name2.append(h1Name2);
    h1Name2.innerText = player2.value;
    h1Name2.id = "input1";
    welcomePage.style.display = "none";
    Game.style.display = "block";
  }
});

const correctSoulutions = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
];
let xSoulution = [];
let oSoulution = [];
let active = true;
let turn = "x";

const addCellListenrs = function () {
  const cell = document.querySelectorAll(".inputBox");
  cell.forEach((x, i) =>
    x.addEventListener("click", (e) => {
      clickSound.play();
      if (turn === "x") {
        if (e.target.innerText !== "X" && e.target.innerText !== "O") {
          xSoulution.push(e.target.innerText);
          check();
          e.target.innerText = "X";
          turn = "O";
        }
      } else if (turn === "O") {
        if (e.target.innerText !== "X" && e.target.innerText !== "O") {
          oSoulution.push(e.target.innerText);
          check();
          e.target.innerText = "O";
          turn = "x";
        }
      }
    })
  );
};

const check = function () {
  if (turn === "x") {
    correctSoulutions.forEach((e, i) => {
      let round = [];
      for (let x = 0; x < xSoulution.length; x++) {
        if (e.includes(xSoulution[x])) {
          round.push(xSoulution[x]);
          if (round.length === 3) {
            scoreP1++;
            const player1 = document.getElementById("palyer1");
            winnerPlayerH1.innerText = player1.value;
            winnerPlayerH1.id = "input1";
            winnerPlayer.append(winnerPlayerH1);

            scorePlayer1.innerText = `SCORE : ${scoreP1}`;
            scorePlayer.append(scorePlayer1);

            Game.style.display = "none";
            winnerPage.style.display = "block";
          }
        }
      }
    });
  } else {
    correctSoulutions.forEach((e, i) => {
      let round = [];
      for (let x = 0; x < oSoulution.length; x++) {
        if (e.includes(oSoulution[x])) {
          round.push(oSoulution[x]);
          if (round.length === 3) {
            scoreP2++;
            const palyer2 = document.getElementById("palyer2");
            winnerPlayerH1.innerText = palyer2.value;
            winnerPlayerH1.id = "input1";
            winnerPlayer.append(winnerPlayerH1);

            scorePlayer1.innerText = `SCORE : ${scoreP2}`;
            scorePlayer.append(scorePlayer1);

            Game.style.display = "none";
            winnerPage.style.display = "block";
          }
        }
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  addCellListenrs();
  setInterval(function () {
    Sound.play();
  }, 1000);
});
