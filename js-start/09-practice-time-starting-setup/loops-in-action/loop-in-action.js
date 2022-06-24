//1
const userNumber = document.getElementById("user-number");
const sumBtn = document.body.children[1].children[3];
const sumCal = document.getElementById("calculated-sum");

function sumNum() {
  //   console.log(userNumber.value);
  let userVal = userNumber.value;
  let sumi = 0;
  for (let i = 0; i <= userVal; i++) {
    sumi = sumi + i;
  }
  //   console.log(sumi);
  sumCal.innerText = sumi;
  sumCal.style.display = "block";
}

sumBtn.addEventListener("click", sumNum);

//2
const hiBtn = document.querySelector("#highlight-links button");

function hiligt() {
  //   console.log("hi");
  const allA = document.querySelectorAll("#highlight-links a");
  for (let i of allA) {
    i.classList.add("highlight");
  }
}

hiBtn.addEventListener("click", hiligt);

//3
const userData = {
  name: "JIn",
  age: 28,
  food: "egg",
};
const dataBtn = document.querySelector("#user-data button");

function showData() {
  const dataList = document.getElementById("output-user-data");

  dataList.textContent = "";
  for (let i in userData) {
    // console.log(userData[i]);
    const newLi = document.createElement("li");
    newLi.innerText = `${i} : ${userData[i]}`;
    dataList.appendChild(newLi);
  }
}

dataBtn.addEventListener("click", showData);

//4

const diceBtn = document.querySelector("#statistics button");

function randomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  const inputNum = document.getElementById("user-target-number");
  const diceList = document.getElementById("dice-rolls");

  diceList.innerHTML = "";

  let targetDice = false;
  let countNum = 0;

  while (!targetDice) {
    const randomNum2 = randomNum();
    countNum++;
    const newLi = document.createElement("li");
    newLi.innerText = `count : ${countNum} / ${randomNum2}`;
    diceList.append(newLi);
    if (inputNum.value == randomNum2) {
      targetDice = true;
    }
  }

  const totalRoll = document.getElementById("output-total-rolls");
  const targetNum = document.getElementById("output-target-number");
  targetNum.textContent = inputNum.value;
  totalRoll.textContent = countNum;
}

diceBtn.addEventListener("click", rollDice);
