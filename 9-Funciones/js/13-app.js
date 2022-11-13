
const reproductor = {
    reproducir: (id) => {
        console.log(`Reproduciendo cancion con el id ${id}....`)
    },
    pausar: () => {
        console.log(`Pausar`);
    },
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }

}

reproductor.nuevaCancion = 'Gone gone gone';

reproductor.obtenerCancion;
