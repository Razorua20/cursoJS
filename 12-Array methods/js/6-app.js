const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000 },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
]

const resultado = carrito.every ( producto => producto.precio < 10000000);
console.log(resultado);