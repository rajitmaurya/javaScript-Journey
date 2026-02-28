let count = 0;

let countDisplay = document.querySelector("#count");
let incBtn = document.querySelector("#inc");
let decBtn = document.querySelector("#dec");
let resetBtn = document.querySelector("#reset");

// Color update function
function updateColor() {
  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

// Initial setup
countDisplay.textContent = count;
updateColor();

// Increase
incBtn.addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
  updateColor();
});

// Decrease
decBtn.addEventListener("click", function () {
  count--;
  countDisplay.textContent = count;
  updateColor();
});

// Reset
resetBtn.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
  updateColor();
});