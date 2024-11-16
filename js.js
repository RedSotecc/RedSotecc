window.addEventListener('resize', function () {
    // Ajustar el tamaño de los íconos al cambiar el tamaño de la ventana
    ajustarIconos();
});

function ajustarIconos() {
    const iconos = document.querySelectorAll('.menu .icono');

    // Obtén el ancho de la ventana
    const anchoVentana = window.innerWidth;

    if (anchoVentana <= 768) {
        // En dispositivos móviles, hacemos los íconos más pequeños
        iconos.forEach(icono => {
            icono.style.width = '30px';
            icono.style.height = '30px';
        });
    } else {
        // En pantallas grandes, los íconos tienen un tamaño mayor
        iconos.forEach(icono => {
            icono.style.width = '35px';
            icono.style.height = '35px';
        });
    }
}

// Llamar la función al cargar la página para asegurarse de que los iconos están ajustados
ajustarIconos();

// Función para cambiar de sección
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
