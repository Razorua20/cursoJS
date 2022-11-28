const cliente = {
    nombre: 'Simon',
    saldo: 12000
}

console.log(cliente)
console.log(typeof cliente)

//constructor del objeto 
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const simon = new Cliente('simon', 12000)

console.log(simon);