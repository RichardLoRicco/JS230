// Convert the processData function from Q3 of the prior assignment to a new function named processDataPromise that uses promises. This function should return a promise that processes an array of numbers after a delay, utilizing the .then() method for logging the altered array.

// function processData(numbers, callback) {
//   setTimeout(() => {
//     const processed = numbers.map(callback);
//     console.log(processed);
//   }, 1000);
// }

function processDataPromise(numbers, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processed = numbers.map(callback);
      resolve(processed);
    }, 1000);
  });
}

// Example usage:
processDataPromise([1, 2, 3], (number) => number * 2).then((processedNumbers) => {
  console.log(processedNumbers);
  // After 1 second, logs: [2, 4, 6]
});
