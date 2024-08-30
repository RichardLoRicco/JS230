// Create an async function fetchResource that receives a URL, attempts to fetch the resource, and logs the JSON response. If an error occurs during fetching, the function should log "Failed to load resource". Regardless of success or failure, confirm that the resource was attempted by logging "Resource fetch attempt made".

async function fetchResource(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to load resource");
  } finally {
    console.log("Resource fetch attempt made");
  }
}

// Example usage:
fetchResource("https://jsonplaceholder.typicode.com/todos/1");
// Logs fetched data, then "Resource fetch attempt made"
fetchResource("invalidUrl");
// Logs "Failed to load resource", then "Resource fetch attempt made"