// Suppose you need to perform a sequential task: fetching a user's profile, then their posts, and then their todos. Write an async function fetchUserProfile that awaits each step, catching and logging any errors, while still ensuring that each step is attempted.

async function fetchUserProfile(userId) {
  try {
    const userProfile = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then((res) => res.json());
    console.log("User Profile", userProfile);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }

  try {
    const userPosts = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    ).then((res) => res.json());
    console.log("User Posts", userPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  try {
    const userTodos = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`
    ).then(res => res.json());

    console.log("User Todos", userTodos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

// Example usage:
fetchUserProfile(1);
// Logs user profile, posts, and todos. Catches and logs errors at each step if they occur.


// Mock API:
// GET https://jsonplaceholder.typicode.com/users/1
// GET https://jsonplaceholder.typicode.com/users/1/posts
// GET https://jsonplaceholder.typicode.com/users/1/todos