const efectivo = 700;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 800;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    console.log('Compra realizada')
}