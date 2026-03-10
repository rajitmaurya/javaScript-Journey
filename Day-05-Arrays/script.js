//Array hamesha 0 se strat hota hai 
let fruits = ["apple", "banana", "mango"];

console.log(fruits);
console.log(fruits[0]); // apple
console.log(fruits.length);

//Array ke andar hum kisi bhi type ke data ko store kar sakte hai
let myArray = [1, "hello", true, null, undefined, { name: "rajit" }, [1, 2, 3]];
console.log(myArray);

//Array ke andar hum duplicate values ko store kar sakte hai
let duplicateArray = [1, 2, 3, 1, 2, 3];
console.log(duplicateArray);

//Array methods
//push method - array ke end me element add karta hai
fruits.push("orange");
console.log(fruits);

//pop method - array ke end se element remove karta hai
fruits.pop();
console.log(fruits);

//unshift method - array ke start me element add karta hai
fruits.unshift("grapes");
console.log(fruits);

//shift method - array ke start se element remove karta hai
fruits.shift();
console.log(fruits);

//array with loop
let ram = [10, 20, 30, 40];

for (let i = 0; i < ram.length; i++) {
  console.log(ram[i]);
}
//total sum of array elements

let num = [10, 20, 30, 40];
let sum = 0;

for(let i=0; i<num.length; i++){
    sum +=  num[i];
}
console.log(sum)


//find max number
let arr = [12, 45, 7, 89, 23];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);

//task1 - createve an array of 5 student names and print them using loop 

let students = ["Alice", "Bob", "Charlie", "David"];
let studentList=0;
for(let i=0; i<students.length; i++){
    console.log(students[i]);
}
console.log(studentList)



//task2 - create an array of 5 numbers and find the average of those numbers

let numbersArray = [10, 20, 30, 40, 50];
let total = 0;
for(let i=0; i<numbersArray.length; i++){
    total += numbersArray[i];
}
let totalAverage = total / numbersArray.length;
console.log(totalAverage);



// 

let marsystks = [85, 90, 78, 92, 88];
let highestMarks = marsystks[0];

for (let i = 1; i < marsystks.length; i++) {

    if (marsystks[i] > highestMarks) {  
        highestMarks = marsystks[i];
    }   
}
console.log(highestMarks);


// lowest marks
let maks= [85, 90, 78, 92, 88];
let lowestMarks = maks[0];

for (let i = 1; i < maks.length; i++) {
    if (maks[i] < lowestMarks) {
        lowestMarks = maks[i];
    }
}
console.log(lowestMarks);


//average marks
let marks = [85, 90, 78, 92, 88];
let sum2 = 0;
for(let i=0; i<marks.length; i++){
    sum += marks[i]; 
}

let average = sum / marks.length;
console.log(average);   


//task4 - create an array of 5 numbers and find the second largest number

let num2 = [10, 20, 30, 40, 50];
let largest = num2[0];
let secondLargest = num2[0];     
for(let i=1; i<num2.length; i++){
    if(num2[i] > largest){
        secondLargest = largest;
        largest = num2[i];
    } else if(num2[i] > secondLargest && num2[i] < largest){
        secondLargest = num2[i];
    }
}
console.log(secondLargest);


//task5 - create an array of 5 numbers and find the second smallest number

let numbers2 = [10, 20, 30, 40, 50];
let smallest = numbers2[0];
let secondSmallest = numbers2[0];
for(let i=1; i<numbers2.length; i++){
    if(numbers2[i] < smallest){
        secondSmallest = smallest;
        smallest = numbers2[i];
    } else if(numbers2[i] < secondSmallest && numbers2[i] > smallest){
        secondSmallest = numbers2[i];
    }

}
console.log(secondSmallest);


//array se even numbers ko print karna
let number3 = [10, 15, 20, 25, 30]; 
for(let i=0; i<number3.length; i++){
    if(number3[i] % 2 === 0){
        console.log(number3[i]);
    }
}




//array se odd numbers ko print karna
let numbers = [10, 15, 20, 25, 30];
for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 !== 0){
        console.log(numbers[i]);
    }
}   



let array = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i=4; i>0; i--){
    reversedArray.push(array[i]);

}
console.log(reversedArray);


