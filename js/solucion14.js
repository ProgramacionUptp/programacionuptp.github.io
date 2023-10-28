var enlaces = document.getElementsByTagName('a');
var numeroEnlaces = enlaces.length;
window.alert("Número de enlaces de la página: " + numeroEnlaces);

var penultimoEnlace = enlaces[numeroEnlaces - 2];
var direccionPenultimoEnlace = penultimoEnlace.href;
window.alert("Dirección del penúltimo enlace: " + direccionPenultimoEnlace);

var contadorEnlacesPrueba = 0;
for (var i = 0; i < numeroEnlaces; i++) {
  if (enlaces[i].href === "http://prueba") {
    contadorEnlacesPrueba++;
  }
}
window.alert("Número de enlaces que enlazan a http://prueba: " + contadorEnlacesPrueba);

var parrafos = document.getElementsByTagName('p');
var tercerParrafo = parrafos[2];
var enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a');
var numeroEnlacesTercerParrafo = enlacesTercerParrafo.length;
window.alert("Número de enlaces del tercer párrafo: " + numeroEnlacesTercerParrafo);