function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.contenido');
    secciones.forEach(function(sec) {
        sec.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    var seccionSeleccionada = document.getElementById(seccion);
    seccionSeleccionada.style.display = 'block';
}
