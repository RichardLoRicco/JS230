let count;

function startCounting() {
  let num = 1;
  count = setInterval(() => {
    console.log(num);
    num++;
  }, 1000)
}


startCounting();

function stopCounting(count) {
  clearInterval(count);
}

stopCounting(count);