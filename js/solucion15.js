function muestra() {
    // Obtener el elemento de texto adicional
    var elementoAdicional = document.querySelector('.adicional');
  
    // Mostrar el contenido oculto cambiando la clase CSS
    elementoAdicional.classList.remove('oculto');
    elementoAdicional.classList.add('visible');
  
    // Ocultar el enlace
    var enlace = document.querySelector('.enlace');
    enlace.style.display = 'none';
  }