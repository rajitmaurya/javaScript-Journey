let input = document.querySelector("#nameInput");
let button = document.querySelector("#saveBtn");
let output = document.querySelector("#output");

// Load saved data on page load
let savedName = localStorage.getItem("username");

if (savedName) {
  output.textContent = "Welcome back, " + savedName;
}

// Save data
button.addEventListener("click", function () {
  let name = input.value;

  localStorage.setItem("username", name);

  output.textContent = "Saved: " + name;
});


