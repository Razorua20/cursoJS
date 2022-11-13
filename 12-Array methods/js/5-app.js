const meses = ['enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000 },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
]

// con un forEach
let resultado = '';
carrito.forEach( (producto, index) => {
    if (producto.nombre === 'tablet'){
        resultado = carrito[index]
    }
});

console.log(resultado);

//con .find
const resultado2 = carrito.find( producto => producto.nombre === 'tablet');
console.log(resultado2);