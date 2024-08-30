// Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, it returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new error type that groups together individual errors.

let promise1 = Promise.reject(0);
let promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
let promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));
let promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));


// In this example, even though promise1 rejects very quickly, Promise.any() resolves with the value "quick" because promise2 fulfills first.
