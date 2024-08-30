// Add an onclick event to the element we show and hide above. This time, the function should set the class of the element to 'hidden'. This event will let you hide the visible element by clicking on it. As with the previous function, the first thing the function should do is invoke e.preventDefault.

document.getElementById('notice').onclick = e => {
  e.preventDefault();
  notice.setAttribute('class', 'hidden');
};

// Alternative:
document.getElementById('notice').onclick = e => {
  e.preventDefault(); // for consistency: not needed here

  e.currentTarget.setAttribute('class', 'hidden');
};