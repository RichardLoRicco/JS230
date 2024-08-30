// The await keyword is used inside async functions to pause the code on that line until the promise fulfills, then return the resulting value. With await, you can write asynchronous code that reads somewhat like traditional synchronous code, without blocking the main thread.


async function fetchData() {
  // The function waits here until the operation completes
  let data = await someAsynchronousOperation();
  console.log(data);
  // Then logs the data
}

// Note that await is traditionally used within async functions to pause execution until a promise is settled. It can also be used at the top level of a module. This is an advanced topic we won't get into right now, so let's stay on track and focus on using await within async functions to manage our asynchronous code effectively.

