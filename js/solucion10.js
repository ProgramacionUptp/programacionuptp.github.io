function esPalindromo(cadena) {
    // borrar espacios y convertir a minúsculas
    var cadenaProcesada = cadena.toLowerCase().replace(/\s/g, '');
    
    // Comparar la cadena original con su reverso
    var cadenaReverso = cadenaProcesada.split('').reverse().join('');
    
    if (cadenaProcesada === cadenaReverso) {
      return true;
    } else {
      return false;
    }
  }
  
  var texto = prompt("Introduce una cadena de texto:");
  if (esPalindromo(texto)) {
    window.alert("La cadena es un palíndromo.");
  } else {
    window.alert("La cadena no es un palíndromo.");
  }