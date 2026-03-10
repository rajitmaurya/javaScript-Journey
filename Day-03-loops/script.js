// loops are used to repeat a block of code until a specified condition is met
//Loops repetition ke liye use hote hain, jab tak condition satisfy hoti rahe
// Use case: fixed range, counting, array traverse


// for loop--Jab pehle se pata ho kitni baar loop chalana hai
for (let i = 0; i < 5; i++) {
    console.log(i);
}   

// while loop--Jab condition true hone tak loop chalana hai
let j = 0;  
while (j < 5) {
    console.log(j);
    j++;
}

// do while loop--Loop kam se kam ek baar zaroor chalega
let k = 0;  
do {
    console.log(k);
    k++;
} while (k < 5);

// for...of loop-- Array traverse
const array = ['a', 'b', 'c', 'd', 'e'];
for (const element of array) {
    console.log(element);
}   

// for...in loop-- Object traverse
const object = {a: 1, b: 2, c: 3};
for (const key in object) {
    console.log(key + ': ' + object[key]);
}


//modernjs forEach loop --Array ke har element par ek-ek karke kaam karne ke liye use hota hai
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
}
);


// proint numbers from 1 to 10 using for loop
for (let i=1; i <= 10; i++) {
    console.log(i);
}


// print even numbers from 1 to 100 using while loop
let num = 2;
while (num <= 100) {
    console.log(num);
    num += 2;
}


// print elements of an array using for...of loop
const fruits = ['apple', 'banana', 'cherry', 'date'];
for (const fruit of fruits) {
    console.log(fruit);
}

//table of any number using do...while loop
let n = 1;
const tableOf = 7;
do {
    console.log(n + " x " + tableOf + " = " + (n * tableOf));
    n++;
} while (n <= 10);


// print key-value pairs of an object using for...in loop
const person = {name: 'John', age: 30, city: 'New York'};
for (const key in person) {
    console.log(key + ': ' + person[key]);
}


// print squares of numbers in an array using forEach loop
const nums = [1, 2, 3, 4, 5];
nums.forEach(function(num) {
    console.log(num * num);
});


// print odd numbers from 1 to 50 using for loop
for (let i = 1; i <= 50; i += 2) {
    console.log(i);
}


// print multiples of 5 from 5 to 100 using while loop
let multiple = 5;
while (multiple <= 100) {
    console.log(multiple);
    multiple += 5;
}

// 