const puntaje = 2000;
const tarjeta = true;
if (puntaje > 1100) {
    console.log('Puedes pagar');
    if (tarjeta == true) {
        console.log('Ya pagaste')
    }
} else if (puntaje < 1100) {
    console.log('No puedes pagar');
}