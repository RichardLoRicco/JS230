// Promise.allSettled() returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

// This is particularly helpful when you want to know the results of all promises, regardless of whether they succeeded or not.

let promise1 = Promise.resolve(3);
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, "foo"));
let promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => {
  results.forEach((result) => console.log(result.status))
});


// Here, Promise.allSettled() lets you know that one promise was "fulfilled" and the other was "rejected".

