// Rewrite the downloadFile callback function you created in the prior assignment's Q2, as a new promise-based function called downloadFilePromise. Instead of using a callback, it should return a promise that resolves with the message "Download complete!" after a delay.

// function downloadFile(callback) {
//   console.log("Downloading file...");
//   setTimeout(() => {
//     callback("Download complete!");
//   }, 1500);
// }

function downloadFilePromise() {
  return new Promise((resolve) => {
    console.log("Downloading file...");
    setTimeout(() => {
      resolve("Download complete")
    }, 1500);
  });
}

