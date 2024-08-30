// Imagine a situation where you need to clean up resources (e.g., close a file) whether an operation succeeds or fails. Create a promise that resolves with "Operation complete" and demonstrate how to perform cleanup after the operation completes by using .finally().

function operation() {
  return new Promise((resolve) => {
    console.log("Operation started");
    setTimeout(() => {
      resolve("Operation complete");
    }, 1000);
  });
}

operation()
  .then(console.log)
  // Logs: Operation complete
  .finally(() => {
    console.log("Cleaning up resources...");
    // Always logs after operation completion
  });