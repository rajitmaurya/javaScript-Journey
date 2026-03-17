// 1.Async function
// Return message Hello JavaScript
async function greet() {
  return "Hello JavaScript";
}

greet().then(result => console.log(result));//Hello JavaScript


// 2. Delay function (2 seconds)
// Goal: 2 sec baad print Loading finished
function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Loading finished");
    }, 2000);
  });
}

async function run() {
  let result = await delay();
  console.log(result);
}

run(); 



//3 .Multiple await (Sequential)
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("User loaded");
    }, 1000);
  });
}

function getOrders() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Orders loaded");
    }, 1000);
  });
}

async function loadData() {
  let user = await getUser();
  console.log(user);

  let orders = await getOrders();
  console.log(orders);
}

loadData(); ////await sequential execution karata hai.




//Error Handling (try/catch)
function getData() {
  return new Promise((resolve, reject) => {
    reject("Something went wrong");
  });
}

async function fetchData() {
  try {
    let data = await getData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();//Error: Something went wrong




// async-function promise return karta
// await-promise complete hone tak wait
// try/catch-error handle

