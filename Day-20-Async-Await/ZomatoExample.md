# Async/Await Explained with Zomato Example 🍕🚀

This example explains **JavaScript async/await** using a real-life **food ordering (Zomato) scenario**.

---

## 🧠 Real-Life Scenario

When you order food from Zomato:

1. You place the order 🛒
2. Restaurant prepares food 🍳
3. Delivery happens 🚴
4. You receive and eat the food 😋

👉 This process takes time → this is called **asynchronous behavior**

---

## ❌ Without async/await (Using Promises)

```js
function orderFood() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍕 Food delivered");
    }, 2000);
  });
}

orderFood().then(food => {
  console.log(food);
});

---
## Order → Wait → .then() → Result
---
##  With async/await (Modern Way)



