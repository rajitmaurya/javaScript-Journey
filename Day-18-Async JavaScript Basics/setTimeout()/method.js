// setTimeout() ek function ko delay ke baad run karta hai

// Syntax
// setTimeout(callback, time)
// 
// time → milliseconds


console.log("Start");

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

console.log("End");  //Start
// End
// Hello after 2 seconds


