// Obtener todos los enlaces
var enlaces = document.querySelectorAll('a');

// Recorrer cada enlace y agregar el evento onclick
enlaces.forEach(function(enlace) {
  enlace.onclick = function() {
    // Obtener la sección relacionada al enlace
    var seccion = this.parentNode;

    // Obtener el párrafo dentro de la sección
    var parrafo = seccion.querySelector('p');

    if (parrafo.style.display === 'none') {
      // Mostrar la sección y cambiar el mensaje del enlace
      parrafo.style.display = 'block';
      this.textContent = 'Ocultar contenidos';
    } else {
      // Ocultar la sección y cambiar el mensaje del enlace
      parrafo.style.display = 'none';
      this.textContent = 'Mostrar contenidos';
    }

    // Evitar el comportamiento predeterminado del enlace
    return false;
  };
});