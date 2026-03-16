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