//Eliminar
//localStorage.removeItem('meses')

const meses = ['enero', 'febrero', 'marzo'];

const mesesString = JSON.stringify(meses);

localStorage.setItem('meses', mesesString);
//Actualizar un registro

const mesesArray = JSON.parse(localStorage.getItem('meses'))
console.log(mesesArray)
mesesArray.push('Nuevo Mes');
console.log(mesesArray)

localStorage.setItem('meses', JSON.stringify(mesesArray))

//Limpia todo el local
//localStorage.clear
