const fecha =  new Date(); 

moment.locale('es')


//console.log(moment().format('DD-MM-YYYY h::mm:ss a'))
console.log(moment().format('LLLL', fecha))
console.log( moment().add(3, 'days').calendar())
