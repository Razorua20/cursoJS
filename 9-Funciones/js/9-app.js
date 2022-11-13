
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}....`)
    },
    pausar: function() {
        console.log(`Pausar`);
    }

}

reproductor.reproducir(40);
reproductor.pausar();


let playlist = [];

reproductor.playlist = function(cancion) {
    playlist.push(cancion);
    console.log(playlist);
}

reproductor.playlist('Gone Gone Gone');

reproductor.playlist('sigo aqui');
