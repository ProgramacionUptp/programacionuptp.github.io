// Obtener el elemento de la posición
var posicion = document.querySelector('.posicion');

// Obtener el tamaño de la ventana del navegador
var dimensiones = tamanoVentanaNavegador();
var anchoVentana = dimensiones[0];
var altoVentana = dimensiones[1];

// Función para mostrar la zona de la pantalla
function mostrarZona(x, y) {
  var zona = '';

  if (x < anchoVentana / 2 && y < altoVentana / 2) {
    zona = 'Izquierda arriba';
  } else if (x < anchoVentana / 2 && y >= altoVentana / 2) {
    zona = 'Izquierda abajo';
  } else if (x >= anchoVentana / 2 && y < altoVentana / 2) {
    zona = 'Derecha arriba';
  } else {
    zona = 'Derecha abajo';
  }

  posicion.textContent = 'Has pulsado en la zona: ' + zona;
}

// Evento al pulsar el ratón
window.onmousedown = function(event) {
  mostrarZona(event.clientX, event.clientY);
};