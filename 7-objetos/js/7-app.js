//object literal
const producto = {
    nombre: 'monitor',
    precio: 300,
    descripcion: '30 pulgadas' 
}

//object constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Tablet', 300000);

console.log(producto2);

const producto3 = new Producto('telefono', 100000);
console.log(producto3);