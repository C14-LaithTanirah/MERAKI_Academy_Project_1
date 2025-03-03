const welcomePage = document.querySelector("#welcomePage");
const welcomePagecssObj = window.getComputedStyle(welcomePage);
let welcomePageDisplay = welcomePagecssObj.getPropertyValue("display");

const Game = document.querySelector("#Game");
const GamecssObj = window.getComputedStyle(Game);
let Gamedisplay = GamecssObj.getPropertyValue("display");

const playButton = document.querySelector("#play");
playButton.addEventListener("click", () => {
  if (welcomePageDisplay === "block") {
    welcomePage.style.display = "none";
    Game.style.display = "block";
  }
});

const name1 = document.querySelector("#name1");
const player1 = document.getElementById("palyer1");
const name2 = document.querySelector("#name2");
const player2 = document.getElementById("palyer2");

//name1.innerText = player1.value;
//name2.innerText = player2.value || "user2";

let scoreP1 = 0;
let scoreP2 = 0;

console.log(player1);
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
const xSoulution = [];
const oSoulution = [];
let active = true;
let turn = "x";

const cell = document.querySelectorAll(".inputBox");
cell.forEach((x, i) =>
  x.addEventListener("click", (e) => {
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
        turn = "X";
      }
    }
    console.log(xSoulution);
    console.log(oSoulution);
  })
);

check = function () {
  if (turn === "x") {
    correctSoulutions.forEach((e, i) => {
      let round = [];
      for (let x = 0; x < xSoulution.length; x++) {
        if (e.includes(xSoulution[x])) {
          round.push(xSoulution[x]);
          console.log(round.length);
          console.log(round.length === 3);
          if (round.length === 3) {
            scoreP1++;
            console.log("laith");
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
          console.log(round.length);
          if (round.length === 3) {
            scoreP2++;
            return "laith";
          }
        }
      }
    });
  }
};

const score1 = document.querySelector("#scoreP1");
console.log(score1);
score1.innerText = `SCORE : ${scoreP1}`;

const score2 = document.querySelector("#scoreP2");
console.log(score2);
score2.innerText = `SCORE : ${scoreP2}`;

let timeLeft = 5;
let time = document.getElementById("Timer");
let timerId = setInterval(cond, 1000);

cond = function () {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    () => {
      if (turn === "X") {
        turn === "O";
      } else {
        turn === "X";
      }
    };
  } else {
    time.innerText = timeLeft;
    timeLeft--;
  }
};
