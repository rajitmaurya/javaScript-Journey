let count = 0;

let countDisplay = document.querySelector("#count");
let incBtn = document.querySelector("#inc");
let decBtn = document.querySelector("#dec");
let resetBtn = document.querySelector("#reset");

// Increase
incBtn.addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
});

// Decrease
decBtn.addEventListener("click", function () {
  count--;
  countDisplay.textContent = count;
});

// Reset
resetBtn.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});



// task1 Task 1- Count 0 se niche na jaaye

decBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});


//Better UX (Message bhi dikha)
decBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
  } else {
    alert("Count cannot go below 0!");
  }

  countDisplay.textContent = count;
});

decBtn.disabled = true;
