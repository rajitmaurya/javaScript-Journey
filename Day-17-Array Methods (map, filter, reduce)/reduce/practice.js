//Total sum
const numbers = [5,10,15];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);//30

//reduce() array ko single value me convert karta hai.