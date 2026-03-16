// async kya hota hai?
// async function automatically Promise return karta hai


//EXAMPLE
async function greet() {
  return "Hello Rajit";
}

greet().then(result => console.log(result));// hello rajit 



//await kya hota hai?
// await promise ka result wait karke return karta hai

// example 
function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function fetchData() {
  let result = await getData();
  console.log(result);
}

fetchData(); // after 2 second output - Data Recieved








