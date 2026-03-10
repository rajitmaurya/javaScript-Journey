// function banane ka syntax
//Function likhne se kuch nahi hota, call karna padta hai

//basic 
function greet() {
  console.log("Hello JavaScript");
}

greet(); // function call




// function with parameters
function greet(name) {
  console.log("Hello " + name);
}   
greet("JavaScript"); // function call with argument




// function with return value
function add(a, b) {
  return a + b;
}
let sum = add(5, 10); // function call with arguments and storing return value
console.log("Sum: " + sum); // Output: Sum: 15



// function with default parameters 
function greet(name = "Guest") {
    console.log("Hello " + name); 
}
greet(); // Output: Hello Guest
greet("JavaScript"); // Output: Hello JavaScript




// even odd check using function
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is even");
    } else {
    console.log(num + " is odd");
    }
}
checkEvenOdd(4); // Output: 4 is even
checkEvenOdd(7); // Output: 7 is odd




// function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) { 
    return 1;
    } else {
    return n * factorial(n - 1);
    }
}
let outcome = factorial(5);
console.log("Factorial of 5: " + outcome ); // Output: Factorial of 5: 120



// create a function which ad two numbers and return the result
function add(a, b) {
  return a + b;
}
let sums = add(3, 7);
console.log("Sum: " + sums); // Output: Sum: 10




// create a function which takes an array of numbers and returns the average
function average(arr) {
  let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
  return sum / arr.length;
}
let numbr = [10, 20, 30, 40, 50];
let avg = average(numbr);
console.log("Average: " + avg); // Output: Average: 30  




//Function banao jo positive / negative / zero bataye
function checkNumber(num) {
  if (num > 0) {
    console.log(num + " is positive");
    } else if (num < 0) {
    console.log(num + " is negative");
    } else {
    console.log(num + " is zero");
    }
}
checkNumber(5); // Output: 5 is positive
checkNumber(-3); // Output: -3 is negative
checkNumber(0); // Output: 0 is zero



//function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
    return false;
    }
    }
    return true;
}
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false



// function to reverse a string
function reverseString(str) {
  let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) { 
    reversed += str[i];
    }
  return reversed;
}
let originalString = "Hello JavaScript";
let reversedString = reverseString(originalString);
console.log("Reversed String: " + reversedString); // Output: Reversed String: tpircSavaJ olleH



// function to find the largest number in an array
function findLargest(arr) {
  let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
    largest = arr[i];
    }
    }
    return largest;
}
let numbers = [10, 5, 20, 8, 15];
let largestNumber = findLargest(numbers);
console.log("Largest Number: " + largestNumber); // Output: Largest Number: 20



// function which return the factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
    } else {
    return n * factorial(n - 1);
    }
}
let result = factorial(6);
console.log("Factorial of 6: " + result); // Output: Factorial of 6: 720




