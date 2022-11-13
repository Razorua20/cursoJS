
const producto = {
    nombre: 'monitor',
    precio: 300,
    descripcion: '30 pulgadas',
    informacion: {
        medidas: {
            peso: '1kg',
            altura: '1m'
        },
        fabricacion: {
            pais: 'china'
        }
    }
}
/*
console.log(producto);
console.log(producto.informacion);
console.log(producto.fabricacion);
*/

//APLICANDO DESTRUCTURING

const { nombre, informacion,  informacion: { fabricacion, fabricacion:{pais} } } = producto;

console.log(fabricacion);
console.log(pais);
console.log(informacion);
