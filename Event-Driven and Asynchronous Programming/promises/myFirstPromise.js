// To create a new promise, you use the Promise constructor which takes a function called the "executor." This function runs automatically when the promise is created and includes the operations we want to perform. It has two function arguments, typically called resolve and reject.

let myFirstPromise = new Promise((resolve, reject) => {
  // We do something asynchronous here, and then call resolve or reject

  // This is just an example condition
  let condition = true;
  if (condition) {
    // This value will be passed to the .then()
    resolve("Success!");
  } else {
    // This error will be passed to the .catch()
    reject("Failure!");
  }
});

myFirstPromise
  .then((successMessage) => {
    console.log("Yay! " + successMessage);
  })
  .catch((errorMessage) => {
    console.error("Uh oh! " + errorMessage);
  })
  .finally(() => {
    console.log("This runs no matter what.");
  });