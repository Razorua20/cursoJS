
const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000 },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
]

console.log('forEach');

carrito.forEach( (producto) => {
    console.log(`Nombre: ${producto.nombre} - Precio ${producto.precio}`);
})




console.log('.map');

const nuevoArreglo2 = carrito.map( (producto) => {
    return `Nombre: ${producto.nombre} - Precio ${producto.precio}`;
})

console.log(nuevoArreglo2);