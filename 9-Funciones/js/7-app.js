iniciarApp();

function iniciarApp(){
    console.log('Iniciando la app')
    saludar();
};

function saludar(){
    console.log('Holaaa');
    usuarioAutenticado('Juan');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario');
    console.log(`Usuario autenticado: Hola ${usuario}`)
}