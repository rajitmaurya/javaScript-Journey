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


