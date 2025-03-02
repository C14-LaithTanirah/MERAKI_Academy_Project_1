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
      xSoulution.push(e.target.innerText);
    } else {
      oSoulutionSoulution.push(e.target.innerText);
    }
    console.log(xSoulution);
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
          if (round.length === 3) {
            return "laith";
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
            return "laith";
          }
        }
      }
    });
  }
};
