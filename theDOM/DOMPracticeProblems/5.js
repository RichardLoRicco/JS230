// Locate the multiplication paragraph and change the text to the result of the arithmetic problem.

document.getElementById('multiplication').textContent = String(9 * 13);

// Alternative:
document.getElementById('multiplication').innerText = String(13 * 9);