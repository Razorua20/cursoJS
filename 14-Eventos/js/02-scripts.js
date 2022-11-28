const nav = document.querySelector('.navegacion');

//Registrar un evento
nav.addEventListener('mouseenter', () =>{
    console.log('Entrando en la navegacion');
    nav.style.backgroundColor = 'white';

});

nav.addEventListener('click', () =>{
    console.log('Hiciste click');
});

nav.addEventListener('mouseout', () =>{
    console.log('Saliste de navegacion');

    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('dblclick', () =>{
    console.log('Hiciste doble click');
});