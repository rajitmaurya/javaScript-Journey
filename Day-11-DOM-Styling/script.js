let title = document.querySelector("#title");
let colorBtn = document.querySelector("#colorBtn");
let darkBtn = document.querySelector("#darkBtn");

// Change text color
colorBtn.addEventListener("click", function () {
  title.style.color = "red";
  title.style.fontSize = "30px";
});

// Toggle dark mode
darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});