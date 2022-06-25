const edit1 = document.getElementById("user-edit1");
const edit2 = document.getElementById("user-edit2");
const modal = document.querySelector(".modal");
const backdrop = document.getElementById("backdrop");
let playerId2 = 0;

function edit(e) {
  modal.style.display = "block";
  backdrop.style.display = "block";
  playerId2 = +e.target.dataset["playerId"];
  //   playerId2 = userId;
  console.log(playerId2);
}

edit1.addEventListener("click", edit);
edit2.addEventListener("click", edit);

//

const cancleBtn = document.getElementById("btn-cancle");

function cancle() {
  modal.style.display = "none";
  backdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorMsg.innerText = "";
}
cancleBtn.addEventListener("click", cancle);
backdrop.addEventListener("click", cancle);

//

const inputPlayerName = document.getElementById("playername");
// const confirmBtn = document.getElementById("btn-confirm");
const formElement = document.querySelector("form");
const errorMsg = document.getElementById("errorMsg");

const playerName1 = document.getElementById("username1");
const playerName2 = document.getElementById("username2");

function newName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formName = formData.get("username").trim();
  //   console.log(event.target);
  if (!formName) {
    event.target.firstElementChild.classList.add("error");
    errorMsg.innerText = "Please, Enter your name";
  } else {
    modal.style.display = "none";
    backdrop.style.display = "none";
    inputPlayerName.value = "";
    errorMsg.innerText = "";
    event.target.firstElementChild.classList.remove("error");
  }

  //   playerName1.innerText = inputPlayerName.value;
}

formElement.addEventListener("submit", newName);

//

const startBtn = document.getElementById("start-btn");

function showGame() {
  const gameBorld = document.getElementById("play-game");
  gameBorld.style.display = "block";
}

startBtn.addEventListener("click", showGame);
