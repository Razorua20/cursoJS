const pendientes = ['Tarea', 'comer', 'estudiar']

const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000, descuento: true },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
];

for(let pendiente of pendientes) {
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.precio)
}