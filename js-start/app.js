let leng = document.getElementById("length");
let inp = document.getElementById("input");

function check() {
  let remainText = inp.value.length;
  leng.innerText = `${60 - remainText}`;

  if (remainText >= 50) {
    console.log("hi");
    // inp.style.backgroundColor = "blue";
    // inp.style.cssText = "color: white; background-color: black";
    inp.classList.add("warring");
    // leng.classList.add("warring");
  } else {
    inp.classList.remove("warring");
  }
}

inp.addEventListener("input", check);
