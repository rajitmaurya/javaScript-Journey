let input = document.querySelector("#textInput");
let countDisplay = document.querySelector("#count");

let maxLimit = 20;

input.addEventListener("input", function () {
  let text = input.value;

  // Limit apply
  if (text.length > maxLimit) {
    input.value = text.slice(0, maxLimit);
  }

  countDisplay.textContent = input.value.length;
  countDisplay.textContent = input.value.length + " / " + maxLimit;

  // Color change
  if (input.value.length === maxLimit) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
});

let warning = document.querySelector("#warning");

if (input.value.length === maxLimit) {
  warning.textContent = "Character limit reached!";
  warning.style.color = "red";
} else {
  warning.textContent = "";
}