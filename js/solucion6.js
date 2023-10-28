var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDNI = parseInt(prompt("Introduce el número de DNI:"));
var letraUsuario = prompt("Introduce la letra del DNI:").toUpperCase();

if (numeroDNI < 0 || numeroDNI > 99999999) {
    window.alert("El número de DNI dado no es válido.");
} else {
  var resto = numeroDNI % 23;
  var letraCalculada = letras[resto];

  if (letraUsuario !== letraCalculada) {
    window.alert("La letra dada no es correcta.");
  } else {
    window.alert("El número y la letra del DNI son correctos.");
  }
}