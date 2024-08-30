// The async keyword is added to functions to tell them to return a promise. Whether you explicitly return a promise or a value, the async function wraps the returned value in a promise.


async function fetchData() {
  return "data from server";
}

fetchData().then((data) => console.log(data));
// outputs: data from server

// Even though fetchData() just returns a string, because it's an async function, .then() can be used just like with a promise.