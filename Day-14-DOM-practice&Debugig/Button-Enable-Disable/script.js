let input = document.querySelector("#nameInput");
let button = document.querySelector("#submitBtn");

input.addEventListener("input", function () {
  if (input.value.trim() === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
});


button.addEventListener("click", function () {
  alert("Submitted!");
});