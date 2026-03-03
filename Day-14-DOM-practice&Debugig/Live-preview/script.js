let input = document.querySelector("#textInput");
let preview = document.querySelector("#preview");

input.addEventListener("input", function () {
  let text = input.value;

  if (text === "") {
    preview.textContent = "Your text will appear here...";
    preview.textContent = text.toUpperCase();
    preview.style.color = "blue";
  } else {
    preview.textContent = text;
  }
});


