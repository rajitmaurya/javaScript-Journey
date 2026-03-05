let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    let li = document.createElement("li");

    li.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener("click", function () {
  let taskText = input.value.trim();

  if (taskText === "") return;

  tasks.push(taskText);

  saveTasks();
  renderTasks();

  input.value = "";
});

renderTasks();