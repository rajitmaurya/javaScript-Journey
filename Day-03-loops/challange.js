//Count from 1 to 50 using a loop and print the final count value.
let num =0;

for(let i=1; i<50; i++){
    num =num+1;
}
console.log(num)



//factorial of a number using a loop
let factorial = 1;
const number = 5; // Change this to calculate factorial of a different number
for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log("Factorial of " + number + " is: " + factorial);



//print the elements of an array using a loop
const arr = [10, 20, 30, 40, 50];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
