## API kya hota hai?
👉 API = server se data lene ka tarika


## Basic fetch syntax
```js
fetch("API_URL")
.then(res => res.json())
.then(data => console.log(data));
```

## Modern way (async/await)
```js
async function getData() {
  let response = await fetch("API_URL");
  let data = await response.json();

  console.log(data);
}

getData();
```
