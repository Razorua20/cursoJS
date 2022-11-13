const carrito = [];

const producto = {
    nombre: "tablet",
    precio: 50000
}

const producto2 = {
    nombre: "celular",
    precio: 10000
}

const producto3 = {
    nombre: "monitor",
    precio: 500000
}

const producto4 = {
    nombre: "mouse",
    precio: 5000
}

carrito.push(producto,producto2,producto3, producto4);

/*
//Elimina el ultimo
carrito.pop();

//elimina el primero
carrito.shift();
*/
//el que tu quieras
console.table(carrito);

carrito.splice(0,1);

console.table(carrito);