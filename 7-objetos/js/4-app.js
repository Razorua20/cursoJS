"use strict";
const producto = {
    nombre: 'monitor',
    precio: 300,
    descripcion: '30 pulgadas' 
}


//Object.freeze(producto);
Object.seal(producto);
producto.imagen= "imagen.jpg";

console.log(producto);