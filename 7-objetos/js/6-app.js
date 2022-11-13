
const producto = {
    nombre: 'monitor',
    precio: 300,
    descripcion: '30 pulgadas',
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    } 
}


producto.mostrarInfo();