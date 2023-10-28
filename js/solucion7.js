var numero = parseInt(prompt("Introduce un número entero:"));
var factorial = 1;

if (numero < 0) {
  window.alert("El factorial no está definido para números negativos.");
} else {
  for (var i = 1; i <= numero; i++) {
    factorial *= i;
  }
  window.alert("El factorial de " + numero + " es: " + factorial);
}