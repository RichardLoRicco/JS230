// placing header before main

let header = document.querySelector('header');
document.body.insertAdjacentElement('afterbegin', header);

// moving site link to header
let mySiteH1 = document.querySelector('main h1');
header.insertAdjacentElement('afterbegin', mySiteH1);

// moving navigation to header
let nav = document.querySelector('nav');
header.insertAdjacentElement('beforeend', nav);

// moving second header to article
let headerToMove = document.querySelectorAll('header')[1];
let article = document.querySelector('article');
article.insertAdjacentElement('afterbegin', headerToMove);

// moving welcome h1 and following h2 to main
let welcomeToMove = document.querySelectorAll('h1')[1];
let hopeYouStayToMove = document.querySelector('h2');

headerToMove.insertAdjacentElement('beforeend', welcomeToMove)
headerToMove.insertAdjacentElement('afterbegin', hopeYouStayToMove);

// swap image order
let chinFigure = document.querySelectorAll('figure')[1];
let babyMopFigure = document.querySelectorAll('figure')[0];
article.insertAdjacentElement('beforeend', chinFigure);
article.insertAdjacentElement('beforeend', babyMopFigure);