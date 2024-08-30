// The async/await syntax doesn't replace promise methods like Promise.all(). Instead, they can work together in useful ways.

async function fetchMultipleData() {
  try {
    let [firstData, secondData] = await Promise.all([
      fetchFirst(),
      fetchSecond(),
    ]);
    console.log(firstData, secondData);
  } catch (error) {
    console.error("An error occured while fetching data:", error);
  }
}


// In this example, Promise.all() is used to trigger multiple promises in parallel, and await pauses until all of them resolve.

