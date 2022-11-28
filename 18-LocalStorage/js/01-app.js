//solo almacena strings
localStorage.setItem('nombre', 'Caro');

const producto = {
    nombre: 'Celular',
    precio: 500000
}

const productoString = JSON.stringify(producto);

console.log(productoString)

localStorage.setItem('producto', productoString)

const meses = ['enero', 'febrero', 'marzo'];

const mesesString = JSON.stringify(meses);

localStorage.setItem('meses', mesesString);