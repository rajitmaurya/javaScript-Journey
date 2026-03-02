let input = document.querySelector("#textInput");
let countDisplay = document.querySelector("#count");

input.addEventListener("input", function () {
  let text = input.value;
  countDisplay.textContent = text.length;
});

let words = text.trim().split(" ").filter(Boolean);
console.log(words.length);