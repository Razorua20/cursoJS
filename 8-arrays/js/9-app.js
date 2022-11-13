
const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000 },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
]

for (let i = 0; i < carrito.length; i++) {
    console.log(`Nombre: ${carrito[i].nombre} - Precio ${carrito[i].precio}`)
}

carrito.forEach(function (producto) {
    console.log(`Nombre: ${producto.nombre} - Precio ${producto.precio}`)
})