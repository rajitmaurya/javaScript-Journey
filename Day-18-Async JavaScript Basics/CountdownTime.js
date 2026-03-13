let count = 5;

let timer = setInterval(() => {
  console.log(count);
  count--;

  if (count === 0) {
    clearInterval(timer);
    console.log("Done");
  }
}, 1000);