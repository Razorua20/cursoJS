/*for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log('Cinco')
        continue;
    }
    console.log(`Numero ${i}`)
}*/

const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000, descuento: true },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
];

for (let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento){
        console.log(`El producto ${carrito[i].nombre} tiene descuento`)
        continue;
    }
    console.log(carrito[i].nombre)
}