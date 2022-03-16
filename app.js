// Variables
const cells = document.querySelectorAll(".data");
let playerx = document.getElementById("score__x");
let playero = document.getElementById("score__o");
let player = "X";
const resetbtn = document.querySelector("#restart-Game");
const cellArray = Array.from(cells);
const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Functions
cells.forEach((cell) => cell.addEventListener("click", gameStart));

function gameStart(e) {
  if (e.target.textContent === "") {
    e.target.textContent = player;
    checkWinner();
    switchPlayer();
  }
}

// Switching the player
function switchPlayer() {
  player = player === "X" ? "O" : "X";
}

// Winner Checking
function checkWinner() {
  const matched = winningCondition.some((wc) => {
    const result = wc.every((ev) => {
      return cells[ev].textContent === player;
    });
    return result;
  });

  //   Players Winning Condition
  if (matched) {
    alert(`Congratulation ${player} : You Won the match`);
    if (player === "X") {
      playerx.textContent++;
    } else {
      playero.textContent++;
    }
    setTimeout(resetGame, 1000);
  }

  //   Nobody winning Condition
  else {
    if (cellArray.every((ev) => ev.textContent !== "")) {
      alert("Match is draw ...Nobody won the match");
      setTimeout(resetGame, 1000);
    }
  }
}

//Reset Game
function resetGame() {
  cells.forEach((cell) => (cell.textContent = ""));
}

resetbtn.addEventListener("click", function () {
  resetGame();
  playero.textContent = 0;
  playerx.textContent = 0;
});
