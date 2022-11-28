//Modificar tetos o imagenes con html
const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado)

//console.log(encabezado.innerText); // Css- visibility: hidden; no encontrara el texto
//Lo muestra aunque este oculto
//console.log(encabezado.textContent);
//Trae el html
//console.log(encabezado.innerHTML);
const nuevoHeading = 'Nuevo heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'