// switch case

const metodo = "Efectivo";

switch (metodo) {
    case 'Efectivo':
        console.log(`Pagaste con ${metodo}`)
        break;
    default:
        console.log('Aun no Has seleccionado un metodo de pago')
        break;
}