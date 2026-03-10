// filter() – Data select karna
//  filter() condition check karta hai aur matching elements return karta hai

const numbers = [1,2,3,4,5,6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);  // [2,4,6]


// real example
const ages = [12,18,21,15,30];

const adults = ages.filter(age => age >= 18);

console.log(adults); //[18,21,30]