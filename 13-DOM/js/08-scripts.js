const navegacion = document.querySelector('nav');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
/*
console.log(navegacion);
console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
console.log(navegacion.children); 
*/

/*
console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);
*/


//const card = document.querySelector('.card');
/*
card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]);



//Traversing del padre al hijo
//console.log(card.parentElement.parentElement);
console.log(card);
console.log(card.nextElementSibling);
*/

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);