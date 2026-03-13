// setInterval()
// 
//  setInterval() repeatedly run hota hai


setInterval(() => {
  console.log("Running every 2 seconds");
}, 2000);//Running every 2 seconds


//clearInterval()
// Interval stop karne ke liye use hota hai.

let interval = setInterval(() => {
  console.log("Hello");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);//5 seconds baad interval stop.


//Print numbers 1 to 5 every second
let count = 1;

let interval2= setInterval(() => {
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(interval);
  }
}, 1000);

//5 seconds baad interval stop ho jayega.
let interval3= setInterval(() => {
  console.log("Running...");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Stopped!");
}, 5000);