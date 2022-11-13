const producto = {
    nombre: 'celular',
    precio: 250000,
    disponible: true
}

const {nombre} = producto;

//console.log(nombre);

//destructuring con arreglos

const numeros = [10, 20, 30, 40];

const [, , tercero] = numeros;

console.log(tercero);



