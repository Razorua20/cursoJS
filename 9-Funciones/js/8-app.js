function sumar(a, b) {
    return a + b
}

const resultado = sumar(2, 6);

console.log(resultado);


let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(){
    return total *1.19;
}

total = agregarCarrito(300);

const totalPagar =calcularImpuesto(total);



console.log(total);
console.log(`El total a pagar es de ${totalPagar}`)