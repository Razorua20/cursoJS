const meses = ['enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000 },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
]

// con un foreach
/*
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total)
*/

// .reduce

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

console.log(resultado);