const meses = ['enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000 },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
]
/*
meses.forEach( (mes, i) => {
    if(mes === 'Abril'){
        console.log(`Abril fue encontrado en el indice ${i}`)
    }
})
*/

//Encontrar el indice de abril
const indice = meses.findIndex( (mes) => {
    return mes === 'Abril';
})

console.log(indice);

const i = carrito.findIndex ( (carrito) => {
    return carrito.nombre === 'tablet';
})

console.log(i)