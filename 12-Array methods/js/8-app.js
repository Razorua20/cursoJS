const meses = ['enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'celular', precio: 500000 },
    { nombre: 'tablet', precio: 600000 },
    { nombre: 'mouse', precio: 50000 },
    { nombre: 'audifonos', precio: 55000 },
    { nombre: 'teclado', precio: 60000 },
    { nombre: 'computador', precio: 1500000 }
]

//Funcion spread no altera el arreglo original
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

const producto = { producto: 'Disco duro', precio: 300};

const carrito2 = [...carrito, producto];
console.log(carrito2);