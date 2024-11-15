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
