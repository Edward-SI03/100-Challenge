const edit1 = document.getElementById("user-edit1");
const edit2 = document.getElementById("user-edit2");
const modal = document.querySelector(".modal");
const backdrop = document.getElementById("backdrop");
let playerId = 0;

const player = [
  { name: "", icon: "X" },
  { name: "", icon: "O" },
];

function edit(e) {
  modal.style.display = "block";
  backdrop.style.display = "block";
  playerId = +e.target.dataset["playerId"];
  // console.log(playerId);
  inputPlayerName.focus();
  return playerId;
}

edit1.addEventListener("click", edit);
edit2.addEventListener("click", edit);

//모달 띄우기

const cancleBtn = document.getElementById("btn-cancle");

function cancle() {
  modal.style.display = "none";
  backdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  inputPlayerName.value = "";
  errorMsg.innerText = "";
}
cancleBtn.addEventListener("click", cancle);
backdrop.addEventListener("click", cancle);

//취소

const inputPlayerName = document.getElementById("playername");
const formElement = document.querySelector("form");
const errorMsg = document.getElementById("errorMsg");

function newName(event) {
  event.preventDefault();
  const playerUpdateName = document.getElementById("username" + playerId);
  const formData = new FormData(event.target);
  const formName = formData.get("username").trim();
  player[playerId - 1].name = formName;
  //   console.log(event.target);
  if (!formName) {
    event.target.firstElementChild.classList.add("error");
    errorMsg.innerText = "Please, Enter your name";
  } else {
    playerUpdateName.innerText = formName;
    cancle();
  }
}

formElement.addEventListener("submit", newName);

// 이름 바꾸기
