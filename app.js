let boxes = document.querySelectorAll(".box");
let reseBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
  [3, 4, 5],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () => {
  enableBoxes();
  turnO = true;
  msgContainer.classList.add("hide");
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  msg.innerText = `Cogratulations! The Winner is "${winner}" `;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let patterns of winPattern) {
    let pos1 = boxes[patterns[0]].innerText;
    let pos2 = boxes[patterns[1]].innerText;
    let pos3 = boxes[patterns[2]].innerText;

    if ((pos1 && pos2 && pos3) != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

reseBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
