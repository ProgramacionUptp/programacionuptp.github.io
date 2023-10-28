// Obtener los elementos de la página
var raton = document.getElementById('raton');
var teclado = document.getElementById('teclado');
var maxCaracteres = 50; // Máximo número de caracteres permitidos

// Función para mostrar información en el cuadro correspondiente
function muestraInformacion(event, cuadro) {
  var mensaje = '';
  var colorFondo = '';

  if (event.type === 'mousemove') {
    mensaje = 'Posición respecto del navegador: ' + event.clientX + ', ' + event.clientY;
    mensaje += '<br>Posición respecto de la página: ' + event.pageX + ', ' + event.pageY;
    colorFondo = 'white';
  } else {
    mensaje = 'Evento: ' + event.type;
    colorFondo = event.type === 'mousedown' ? '#FFFFCC' : '#CCE6FF';
  }

  cuadro.innerHTML = mensaje;
  cuadro.style.backgroundColor = colorFondo;
}

// Evento para mover el ratón
window.onmousemove = function(event) {
  muestraInformacion(event, raton);
};

// Evento al pulsar una tecla
window.onkeydown = function(event) {
  muestraInformacion(event, teclado);

  // Obtener el contenido actual del cuadro de texto
  var contenido = teclado.textContent.trim();

  // Verificar si se ha alcanzado el máximo de caracteres permitidos
  if (contenido.length >= maxCaracteres) {
    // Permitir el uso de las teclas Backspace, Supr y las flechas horizontales
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      return;
    }
    // Cancelar el evento para evitar la entrada de más caracteres
    event.preventDefault();
  }
};

// Evento al escribir en el cuadro de texto
teclado.oninput = function() {
  // Obtener el contenido actual del cuadro de texto
  var contenido = teclado.textContent.trim();

  // Calcular el número de caracteres restantes
  var caracteresRestantes = maxCaracteres - contenido.length;

  // Mostrar el número de caracteres restantes al usuario
  var mensajeRestantes = 'Caracteres restantes: ' + caracteresRestantes;
  teclado.nextElementSibling.textContent = mensajeRestantes;
};