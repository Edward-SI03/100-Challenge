let pTag = document.getElementById("click");

// console.log(pTag);

function clickP() {
  pTag.innerText = "i'm clicked";
  console.log("clicked");
}

pTag.addEventListener("click", clickP);

let inputTag = document.getElementById("input");

console.log(inputTag);

function checknum() {
  console.log(inputTag.value);
}

inputTag.addEventListener("input", checknum);
