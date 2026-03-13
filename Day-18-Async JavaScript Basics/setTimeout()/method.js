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


//SetTimeout with function
function greet(){
  console.log("Hello Rajit");
}

setTimeout(greet, 3000);


//Print numbers 1 to 5 every second

setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);