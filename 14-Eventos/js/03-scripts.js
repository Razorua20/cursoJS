const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) =>{
    if(e.target.value === ''){        
        busqueda.style.backgroundColor = 'red';
        alert('escribe algo');
    }
    console.log(e.target.value);
});

