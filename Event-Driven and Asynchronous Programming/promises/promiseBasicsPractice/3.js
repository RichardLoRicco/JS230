// Create a promise called flakyService that simulates a service that sometimes fails. The promise should resolve with "Operation successful" or reject with "Operation failed" randomly. Use .then() for a successful operation log and .catch() for logging a failed operation.

function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

flakyService()
  .then(console.log)
  .catch(console.error);