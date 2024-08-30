// Promise.race() is similar to Promise.all() in that it takes an iterable of promises. However, the promise returned by Promise.race() settles as soon as one of the input promises settles — that means it's either fulfilled or rejected. This can be useful when you want to "race" multiple promises against each other and only care about the first one to complete.



let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});

// In this race, promise2 completes first, so "two" is logged.

