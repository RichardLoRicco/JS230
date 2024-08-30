// When you have a set of asynchronous operations that you want to run in parallel and wait for all of them to complete, Promise.all() is the tool you need. It takes an iterable (e.g., an array) of promises and returns a single promise.

// The returned promise fulfills when all of the input promises have fulfilled, or rejects as soon as one of the input promises rejects. If the returned promise fulfills, it resolves with an array containing the resolve values of each promise, in the same order as the promises provided.

let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
})