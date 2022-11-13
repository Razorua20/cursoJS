/*

const pendientes = ['Tarea', 'comer', 'estudiar']

pendientes.forEach( (nom, indice) => {
    console.log(`Indice: ${indice}: ${nom}`)
});
*/


const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000, descuento: true },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
];

carrito.forEach( producto => {console.log(producto.nombre)}); 