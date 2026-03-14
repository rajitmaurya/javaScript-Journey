// Promise kya hota hai?
// 
// Promise = future me milne wala result
// 
// Example real life:
// 
// Food order kiya
// → Wait
// → Food mil gaya (Resolved)
// → Food nahi mila (Rejected)



// Promise-States
// State	Meaning
// Pending	kaam chal raha
// Resolved	success
// Rejected	error


//Baiscs promises
const myPromise = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }

});


//Using .then() and .catch()
myPromise
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
}); // task completed
