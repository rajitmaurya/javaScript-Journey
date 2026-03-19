# Async/Await Explained with Zomato Example

This example explains **JavaScript async/await** using a real-life **food ordering (Zomato) scenario**.

---

##  Real-Life Scenario

When you order food from Zomato:

1. You place the order 🛒
2. Restaurant prepares food 🍳
3. Delivery happens 🚴
4. You receive and eat the food 

👉 This process takes time → this is called **asynchronous behavior**

---

## ❌ Without async/await (Using Promises)

```js
function orderFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Food delivered");
    }, 2000);
  });
}

orderFood().then(food => {
  console.log(food);
});

flow ...
Order placed
↓
Waiting for food
↓
.then() executes
↓
Food delivered

```

---

##  With async/await (Modern Way)
```js
function orderFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Food delivered");
    }, 2000);
  });
}

async function eatFood() {
  console.log("Ordering food...");

  let food = await orderFood();

  console.log(food);
  console.log("Eating food ");
}

eatFood();


flow...
Ordering food...
↓
await orderFood()
↓
(wait until food is ready)
↓
Food delivered
↓
Eating food 

```
---
## Key Concept

👉 await means:
"Wait here until the Promise is completed"
👉 It pauses execution without blocking the entire program

---
## Important Rule
await can only be used inside an async function
example
```js
async function run() {
  let data = await orderFood();
}
```

