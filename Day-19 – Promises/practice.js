//Create Promise (Resolve after 2 seconds)
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task finished");
  }, 2000);
});

promise.then(result => console.log(result));// task finished after 2 seconds





//Promise with condition (marks)
const checkResult = new Promise((resolve, reject) => {

  let marks = 50;

  if (marks > 40) {
    resolve("Pass");
  } else {
    reject("Fail");
  }

});

checkResult
.then(result => console.log(result))
.catch(error => console.log(error));//pass


//promise chaining Start with 5 → ×2 → ×3
const promise2 = new Promise((resolve) => {
  resolve(5);
});

promise
.then(num => num * 2)
.then(num => num * 3)
.then(result => console.log(result));



//Mini task simulate api call 
const fetchUser = new Promise((resolve) => {

  setTimeout(() => {
    resolve("User data fetched");
  }, 3000);

});

fetchUser.then(data => console.log(data));//User data fetched





// 
// Real APIs me Promise use hota hai:
// fetch("https://api.example.com")
// .then(res => res.json())
// .then(data => console.log(data));