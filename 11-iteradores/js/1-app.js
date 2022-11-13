//for (let i = 0; i < 10; i++) {
//    console.log(`Numero: ${i}`)
//}

/*
for (let i = 1; i <= 20; i++) {
    if(i % 2 === 0){
        console.log(`El numero ${i} es PAR`)
    }else{
        console.log(`El numero ${i} es IMPAR`)
    }
}*/

const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000 },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
]

for (let i = 0; i <= carrito.length; i++) {
    console.log(carrito[i].nombre);
}