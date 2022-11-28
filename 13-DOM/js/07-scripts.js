//Cambiando css con javascript
const encabezado = document.querySelector('h1');

//En javascript no se separan por guion como en css, se pone en mayuscula la segunda palabra
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';

const card = document.querySelector('.card');
card.classList.add('nueva-clase','segunda-clase');