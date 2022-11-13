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

let resultado;

resultado = [...carrito, producto];

resultado = [producto2,...resultado];

console.table(resultado);
console.table(carrito);