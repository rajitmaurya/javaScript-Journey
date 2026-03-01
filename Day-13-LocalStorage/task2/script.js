let countDisplay = document.querySelector("#count");
let incBtn = document.querySelector("#inc");
let decBtn = document.querySelector("#dec");
let resetBtn = document.querySelector("#reset");

// 🔥 Step 1: Load saved value
let savedCount = localStorage.getItem("count");

let count = savedCount ? parseInt(savedCount) : 0;

// Show initial value
countDisplay.textContent = count;

// 🔥 Color function
function updateColor() {
  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

updateColor();

// 🔥 Save function
function saveCount() {
  localStorage.setItem("count", count);
}

// Increase
incBtn.addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;

  saveCount();
  updateColor();
});

// Decrease
decBtn.addEventListener("click", function () {
  count--;
  countDisplay.textContent = count;

  saveCount();
  updateColor();
});

// Reset
resetBtn.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;

  saveCount();
  updateColor();
});