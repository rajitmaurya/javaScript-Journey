//object
let user = {
  name:"Rajit",
  age:22,
  city:"Delhi"
};

//old way
console.log(user.name);
console.log(user.age);

// modern way
let {name, age} = user;

console.log(name);
console.log(age);

// Array-Destructuring
let colors = ["red","blue","green"];

let [first, second] = colors;

console.log(first);
console.log(second);

