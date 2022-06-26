// 게임 스타트 버튼

const startBtn = document.getElementById("start-btn");
const newGameBtn = document.getElementById("new-game-btn");
const gameBoard = document.getElementById("play-game");

function showGame() {
  if (player[0].name === "" || player[1].name === "") {
    alert("no");
    return;
  }
  gameBoard.style.display = "block";
  edit1.style.display = "none";
  edit2.style.display = "none";
  startBtn.style.display = "none";
  newGameBtn.style.display = "inline-block";
  playerTrun.innerText = player[activePlayer].name;
}

startBtn.addEventListener("click", showGame);

const playerTrun = document.getElementById("active-player-name");

function newGame() {
  location.reload();
}
newGameBtn.addEventListener("click", newGame);

// 게임 카드 누르기

const fieldEles = document.querySelectorAll("#game-field li");
let activePlayer = 0;
let gameRound = 0;
const notWinner = document.getElementById("not-winner");

function activedfield() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function selectedField(e) {
  fieldId = e.target.dataset["fieldid"];
  let Q = parseInt((fieldId - 1) / 3);
  let M = (fieldId - 1) % 3;
  if (!gameField[Q][M] == 0) {
    alert("no");
    return;
  }
  e.target.classList.add("disable");
  e.target.textContent = player[activePlayer].icon;
  gameField[Q][M] = player[activePlayer].icon;
  checkWin();
  gameRound++;
  if (gameRound === 9) {
    notWinner.style.display = "inline-block";
    alertWin.style.display = "none";
  }
  activedfield();
  playerTrun.innerText = player[activePlayer].name;
}

for (const i of fieldEles) {
  i.addEventListener("click", selectedField);
}

const gameOver = document.getElementById("game-over");
const winner = document.getElementById("winer-name");
const alertWin = document.getElementById("alert-trun");
let winnerName = "";

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      gameField[i][0] !== 0 &&
      gameField[i][0] == gameField[i][1] &&
      gameField[i][1] == gameField[i][2]
    ) {
      winnerName = player[activePlayer].name;
      winPlayer(winnerName);
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameField[0][i] !== 0 &&
      gameField[0][i] == gameField[1][i] &&
      gameField[1][i] == gameField[2][i]
    ) {
      winnerName = player[activePlayer].name;
      winPlayer(winnerName);
    }
  }
  if (
    gameField[0][0] !== 0 &&
    gameField[0][0] == gameField[1][1] &&
    gameField[1][1] == gameField[2][2]
  ) {
    winnerName = player[activePlayer].name;
    winPlayer(winnerName);
  }
  if (
    gameField[0][2] !== 0 &&
    gameField[0][2] == gameField[1][1] &&
    gameField[1][1] == gameField[2][0]
  ) {
    winnerName = player[activePlayer].name;
    winPlayer(winnerName);
  }
}

const fieldEle = document.querySelector("#game-field");

function winPlayer(dataWin) {
  gameOver.style.display = "block";
  winner.innerText = dataWin;
  alertWin.style.display = "none";
  fieldEle.classList.add("dontclick");
}

const gameField = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let fieldId = 0;
