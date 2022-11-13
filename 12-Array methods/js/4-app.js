const meses = ['enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000 },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
]

let resultado ;

resultado = carrito.filter ( producto => producto.precio > 60000);

resultado = carrito.filter ( producto => producto.precio < 60000);

resultado = carrito.filter ( producto => producto.nombre !== 'celular');

resultado = carrito.filter ( producto => producto.nombre == 'celular');
console.log(resultado);