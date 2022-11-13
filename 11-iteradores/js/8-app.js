const pendientes = ['Tarea', 'comer', 'estudiar']

const automovil = {
    nombre: 'Autito',
    color: 'verde',
    sabor: 'manzana'
};

/*for(let auto in automovil) {
    console.log(`${automovil[auto]}`);
}
*/


for(let [llave, valor] of Object.entries(automovil)){
    console.log(valor)
    console.log(llave)
};