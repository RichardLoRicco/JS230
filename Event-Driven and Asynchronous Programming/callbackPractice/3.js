// Write a function processData that takes in two parameters: an array of numbers and a callback function. This function should use setTimeout to simulate a time-consuming computation by waiting 1 second. After the delay, it should apply the callback to each number in the array, and then log the new array.


function processData(numbers, callback) {
  setTimeout(() => {
    const processed = numbers.map(callback);
    console.log(processed);
  }, 1000)
}

// Example usage:
processData([1, 2, 3], (number) => number * 2);
// After 1 second, logs: [2, 4, 6]