let input = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#taskList");
let taskCount = document.querySelector("#taskCount");
let themeBtn = document.querySelector("#themeBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateCount(){
  taskCount.textContent = tasks.length;
}

function renderTasks(){
  taskList.innerHTML="";

  tasks.forEach((task,index)=>{

    let li=document.createElement("li");

    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.checked=task.completed;

    let span=document.createElement("span");
    span.textContent=task.text;

    if(task.completed){
      span.classList.add("completed");
    }

    checkbox.addEventListener("change",()=>{
      task.completed=!task.completed;
      saveTasks();
      renderTasks();
    });

    let editBtn=document.createElement("button");
    editBtn.textContent="Edit";

    editBtn.addEventListener("click",()=>{
      let newText=prompt("Edit task:",task.text);
      if(newText){
        task.text=newText;
        saveTasks();
        renderTasks();
      }
    });

    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="❌";

    deleteBtn.addEventListener("click",()=>{
      tasks.splice(index,1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

  });

  updateCount();
}

addBtn.addEventListener("click",()=>{
  let taskText=input.value.trim();

  if(taskText==="") return;

  tasks.push({
    text:taskText,
    completed:false
  });

  saveTasks();
  renderTasks();

  input.value="";
});

themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
});

renderTasks();