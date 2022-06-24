// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"

const firBtn = document.querySelector("button");
const secBtn = document.querySelector("#secBtn");

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

// function firBtnClicked() {
//   console.dir(firBtn);
// }
// function secBtnClicked(e) {
//   console.dir(e.target);
// }

// firBtn.addEventListener("click", firBtnClicked);

// secBtn.addEventListener("click", secBtnClicked);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

const firParag = document.body.children[2].children[1];

// const thirdpareg = document.body.children[2].children[3];
const thirdParag = firParag.nextElementSibling.nextElementSibling;

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

function firBtnClicked() {
  thirdParag.remove();
}
function secBtnClicked(e) {
  //   firParag.style = "color: blue";
  firParag.classList.add("blueChange");
}

firBtn.addEventListener("click", firBtnClicked);

secBtn.addEventListener("click", secBtnClicked);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
