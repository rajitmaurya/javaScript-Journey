// async function getUsers() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();
// 
//   console.log(data);
// }
// 
// getUsers();


let list = document.querySelector("#list");

async function getUsers() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await res.json();

  users.forEach(user => {
    let li = document.createElement("li");
    li.textContent = user.name;

    list.appendChild(li);
  });
}

getUsers();