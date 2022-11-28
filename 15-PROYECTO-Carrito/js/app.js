//Variables
const carrito = document.querySelector('#carrito');
const contCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso presionando "agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito = []; // reseteamos el arreglo

        limpiarHTML(); //Eliminamos todo el html
    })
};



//Funciones

function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        //Selecciono todos los datos del curso (titulo, img, precio)
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }

}

//Elimina un curso del carrito
function eliminarCurso(e) {
    e.preventDefault();
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        // Eliminar del arreglo por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHtml(); // Iterar sobre el carrito y mostrar su HTML
    }
}


//Lee el contenido del html y extrae la informacion del curso
function leerDatosCurso(curso) {

    //Crear un objeto con la info del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            } else {
                return curso; // retorna los objetos no actualizados
            }
        });
        articulosCarrito = [...cursos];

        // Agregamos el curso al carrito
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    console.log(articulosCarrito);

    carritoHtml();
}

// Muestra el carrito en el html

function carritoHtml() {
    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width= "120"></img>
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> x </a>
            </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contCarrito.appendChild(row);
    });
}

//Elimina los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    // contCarrito.innerHTML = '';

    //Forma rapida
    while (contCarrito.firstChild) {
        contCarrito.removeChild(contCarrito.firstChild);
    }
}