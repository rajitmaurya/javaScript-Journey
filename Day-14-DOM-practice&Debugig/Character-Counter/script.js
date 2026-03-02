let input = document.querySelector("#textInput");
let countDisplay = document.querySelector("#count");

input.addEventListener("input", function () {
  let text = input.value;
  countDisplay.textContent = text.length;
});