// products
const products = [
 {name:"Laptop", price:50000},
 {name:"Phone", price:20000},
 {name:"Tablet", price:15000}
];


//Get product names (map)
const productNames = products.map(product => product.name);

console.log(productNames);  //["Laptop","Phone","Tablet"]



//Filter products above 20000
const expensiveProducts = products.filter(product => product.price > 20000);

console.log(expensiveProducts);//[{name:"Laptop", price:50000}]


//Calculate total price (reduce)
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

console.log(totalPrice);//85000
