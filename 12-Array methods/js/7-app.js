const meses = ['enero', 'febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembe', 'Octubre', 'Noviembre', 'Diciembre']; 

//.concat
const meses3 = meses.concat(meses2);

console.log(meses3);

//funcion spread

const resultado = [...meses, ...meses2]
console.log(resultado)