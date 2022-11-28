window.addEventListener('scroll', () => {
    /*
    Saber cantidad de pixeles al realizar scroll
    const scrollPX = window.scrollY;

    console.log(scrollPX);
    */
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion);

    if (ubicacion.top < 740) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('aun falta')
    }
});