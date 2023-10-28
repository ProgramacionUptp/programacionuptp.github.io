function mostrarInformacionCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      window.alert("La cadena está formada solo por mayúsculas.");
    } else if (cadena === cadena.toLowerCase()) {
      window.alert("La cadena está formada solo por minúsculas.");
    } else {
      window.alert("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
    }
  }
  
  var texto = prompt("Introduce una cadena de texto:");
  mostrarInformacionCadena(texto);