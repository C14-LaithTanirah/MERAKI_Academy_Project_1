const xSoulution = [];
const oSoulution = [];
let active = true;
let turn = "x";

const cell = document.querySelectorAll(".inputBox");
cell.forEach((x) =>
  x.addEventListener("click", (e) => {
    if (turn === "x") {
      if (e.target.innerText === 0) {
        xSoulution[0][0] = 0;
      } else if (e.target.innerText === 1) {
        xSoulution[0][1] = 0;
      } else if (e.target.innerText === 2) {
        xSoulution[0][2] = 0;
      } else if (e.target.innerText === 3) {
        xSoulution[1][0] = 0;
      } else if (e.target.innerText === 4) {
        xSoulution[1][1] = 0;
      } else if (e.target.innerText === 5) {
        xSoulution[1][2] = 0;
      } else if (e.target.innerText === 6) {
        xSoulution[2][0] = 0;
      } else if (e.target.innerText === 7) {
        xSoulution[2][1] = 0;
      } else if (e.target.innerText === 8) {
        xSoulution[2][2] = 0;
      }
    } else {
      if (e.target.innerText === 0) {
        oSoulution[0][0] = 0;
      } else if (e.target.innerText === 1) {
        oSoulution[0][1] = 0;
      } else if (e.target.innerText === 2) {
        oSoulution[0][2] = 0;
      } else if (e.target.innerText === 3) {
        oSoulution[1][0] = 0;
      } else if (e.target.innerText === 4) {
        oSoulution[1][1] = 0;
      } else if (e.target.innerText === 5) {
        oSoulution[1][2] = 0;
      } else if (e.target.innerText === 6) {
        oSoulution[2][0] = 0;
      } else if (e.target.innerText === 7) {
        oSoulution[2][1] = 0;
      } else if (e.target.innerText === 8) {
        oSoulution[2][2] = 0;
      }
    }

    console.log(xSoulution);
  })
);

check = function () {
  if ((turn = "x")) {
    for (let x = 0; x < xSoulution.length; x++) {
      for (let j = 0; j < xSoulution[x].length; j++) {
        
      }
    }
  }
};
