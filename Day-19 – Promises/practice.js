//Create Promise (Resolve after 2 seconds)
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task finished");
  }, 2000);
});

promise.then(result => console.log(result));