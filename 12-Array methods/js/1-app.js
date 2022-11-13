const meses = ['enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000 },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
]

//Comprobar si un valor existe en un arreglo

/*meses.forEach((meses) => {
    if (meses == 'enero') {
        console.log('Enero si existe')
    }
})

//.includes
const resultado = meses.includes('enero');


console.log(resultado)
*/
/*
const existe = carrito.some((producto) => {
    return producto.nombre === 'monitor';
})

console.log(existe);
*/

// En un arreglo tradicional con .some
const existe2 = meses.some( (mes) => {
    return mes === 'febrero';
});

console.log(existe2);