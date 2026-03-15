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


