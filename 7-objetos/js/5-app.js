
const producto = {
    nombre: 'monitor',
    precio: 300,
    descripcion: '30 pulgadas' 
}

const medidas = {
    peso: '1kg',
    altura: '1m'
}

const resultado = Object.assign(producto, medidas);

console.log(resultado);

//spread operator o rest operator

const resultado2 = { ...producto, ...medidas};

console.log(resultado2);