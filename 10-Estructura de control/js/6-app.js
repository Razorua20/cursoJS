const usuario = true;
const contraseña = true;

if (usuario && contraseña) {
    console.log('Bienvenido')

}else if(!usuario){
    console.log('Creese una cuenta');
}else if(!contraseña){
    console.log('Contraseña no existe');
}else {
    console.log('No puedes entrar, GUARDIAS!')
}