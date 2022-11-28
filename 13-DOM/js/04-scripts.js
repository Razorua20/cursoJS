const card = document.querySelector('.card');

console.log(card);
//se usa para seleccionar cosas bien en especifico como por ejemplo un h1 en un formulario

//Podemos tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info)

//Seleccionamos el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//Tambien permite seleccionar id
const formulario = document.querySelector('#formulario');
console.log(formulario);

//Seleccionar elementos html
const navegacion = document.querySelector('nav');
console.log(navegacion);