// reduce() – Single value calculate

// reduce() array ko single value me convert karta hai.


const numbers = [1,2,3,4];

const sum = numbers.reduce((total,num) => total + num,0);

console.log(sum);  //10


//Example – Total cart price
const prices = [100,200,300];

const total = prices.reduce((sum,price)=> sum + price,0);

console.log(total); //600

