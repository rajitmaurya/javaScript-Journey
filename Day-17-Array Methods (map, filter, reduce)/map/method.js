// map() – Transform data
//  map() har element pe function run karta hai aur new array return karta hai.

const numbers = [1,2,3,4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);



//Real Example
const users = ["Rajit","Amit","Rahul"];

const greetings = users.map(name => `Hello ${name}`);

console.log(greetings);  // ["Hello Rajit","Hello Amit","Hello Rahul"]