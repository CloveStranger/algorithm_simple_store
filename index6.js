async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

console.log(
  sleep(10000).then(() => {
    console.log(123);
  })
);
console.log(sleep(200));
console.log(sleep(300));
