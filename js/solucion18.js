// Obtener los elementos de la página
var raton = document.getElementById('raton');
var teclado = document.getElementById('teclado');

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
};