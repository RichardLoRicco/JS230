// You have multiple instances of flakyService promises. Implement a strategy using Promise.allSettled() to execute all services but log all the different outcomes, whether fulfilled or rejected.

const services = [flakyService(), flakyService(), flakyService()];

Promise.allSettled(services).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(
        `Service ${index + 1} succeeded with message: ${result.value}`
      );
    } else {
      console.error(
        `Service ${index + 1} failed with error: ${result.reason}`
      );
    }
  });
});
// Logs success message or error for each service


function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}