// Implement a helper function loadMultipleResources that takes an array of URLs and fetches them using the fetch API. Use Promise.allSettled() to return an array of fetched responses, regardless of whether some URLs may lead to failure.

function loadMultipleResources(urls) {
  const fetchPromises = urls.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .catch(() => "Failed to fetch")
  );
  return Promise.allSettled(fetchPromises);
}

loadMultipleResources([
  "https://jsonplaceholder.typicode.com/todos/1",
  "invalidUrl",
]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fetched data:", result.value);
    } else {
      console.error(result.reason);
    }
  });
});

// Fetched data: {userId: 1, id: 1, title: 'delectus aut autem', completed: false }
// Fetched data: Failed to fetch