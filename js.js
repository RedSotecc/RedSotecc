window.addEventListener('resize', function () {
    ajustarIconos();
});

function ajustarIconos() {
    const iconos = document.querySelectorAll('.menu .icono');
    const anchoVentana = window.innerWidth;

    if (anchoVentana <= 768) {
        iconos.forEach(icono => {
            icono.style.width = '30px';
            icono.style.height = '30px';
        });
    } else {
        iconos.forEach(icono => {
            icono.style.width = '35px';
            icono.style.height = '35px';
        });
    }
}

// Función para mostrar la sección seleccionada
function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.contenido');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    const seccionSeleccionada = document.getElementById(seccionId);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }
}

ajustarIconos(); // Ajuste inicial de los íconos
