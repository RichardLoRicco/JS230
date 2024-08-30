// One of the powers of promises is their ability to be chained. When you attach a .then() method to a promise, it also returns a new promise, which can be handled with another .then() or .catch(). This allows for cleaner asynchronous flow control.

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    alert(result); // 1
    return result * 2;
  })
  .then(function (result) {
    alert(result); // 2
    return result * 2;
  })
  .then(function (result) {
    alert(result); // 4
    return result * 2;
  });

// In this example, each .then() waits for the previous one to finish and uses its result to do something else.

