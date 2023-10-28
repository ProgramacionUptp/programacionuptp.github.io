//determinar cual de los dos elementos de texto es mayor

window.alert("1) determinar cual de los dos elementos de texto es mayor")

var valores = [true, 5, false, "hola", "adios", 2];

var texto1 = valores[3];
var texto2 = valores[4];

if (texto1.localeCompare(texto2) > 0) {
  window.alert(texto1 + " es mayor que " + texto2);
} else if (texto1.localeCompare(texto2) < 0) {
  cwindow.alert(texto2 + " es mayor que " + texto1);
} else {
  window.alert("Los textos son idneticos");
}

//determinar los operadores necesarios para obtener un resultado true y otro false

window.alert(" 2)determinar los operadores necesarios para obtener un resultado true y otro false")

var valores = [true, 5, false, "hola", "adios", 2];

var booleano1 = valores[0];
var booleano2 = valores[2];

var resultadoTrue = booleano1 && booleano2;
var resultadoFalse = booleano1 || booleano2;

window.alert("Resultado true: " + resultadoTrue);
window.alert("Resultado false: " + resultadoFalse);

//Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

window.alert("3)Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos")

var valores = [true, 5, false, "hola", "adios", 2];

var numero1 = valores[1];
var numero2 = valores[5];

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;

window.alert("Suma: " + suma);
window.alert("Resta: " + resta);
window.alert("Multiplicación: " + multiplicacion);
window.alert("División: " + division);
window.alert("Módulo: " + modulo);

