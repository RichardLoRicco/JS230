// Practice chaining promises by creating a promise chain that involves three promises. The first promise should resolve with a number, then the chain should double the number and add 5 in successive .then() calls. Log the result after the final operation.

function promiseChain() {
  return new Promise((resolve) => {
    setTimeout(() => (resolve(7)))
  })
}
promiseChain() 
  .then(function (result) {
    return (result * 2)
  })
  .then(function (result) {
    return (result + 5);
  })
  .then(function (result) {
    console.log(result);
  });

