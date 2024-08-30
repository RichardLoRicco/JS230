// In async/await functions, error handling works with try/catch blocks similar to synchronous code. This feels more intuitive than promise chains with .catch().

async function fetchData() {
  try {
    let data = await someAsynchronousOperation();
    console.log(data);
  } catch(error) {
    console.error("Oops, an error occurred:", error);
  }
}

// The catch block will handle any errors that occur either in the await statement or in the function called.