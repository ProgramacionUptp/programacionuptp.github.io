function determinarParidad(numero) {
    if (numero % 2 === 0) {
      return "El número es par.";
    } else {
      return "El número es impar.";
    }
  }
  
  var numero = parseInt(prompt("Introduce un número entero:"));
  var resultado = determinarParidad(numero);
  window.alert(resultado);