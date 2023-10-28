// 1)expresión regular para validar una fecha en formato "XX/XX/XXXX":

var fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;
var texto = "05/04/1982";
var coincidencia = fechaRegex.test(texto);
window.alert(coincidencia);

//2)expresión regular para validar una dirección de email:

var emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,3}$/;
var correo = "da-ni-el-01@hotmail.com"
var coincidencia_c = emailRegex.test(correo);
window.alert(coincidencia_c);

//3)reescritura de la función escapeHTML() utilizando expresiones regulares:

function escapeHTML(text) {
    var replacements = [["&", "&amp;"], ["\"", "&quot;"], ["<", "&lt;"], [">", "&gt;"]];
  
    replacements.forEach(function(replace) {
      var regex = new RegExp(replace[0], "g");
      text = text.replace(regex, replace[1]);
    });
  
    return text;
  }

//4)expresión regular para invertir el orden de un nombre y un apellido, separados por una coma:

var nombreApellidoRegex = /^(\w+)\s(\w+)$/;
var nombreCompleto = "Daniel Perez";
var invertido = nombreCompleto.replace(nombreApellidoRegex, "$2, $1");
window.alert(invertido);

//5)expresión regular para eliminar etiquetas potencialmente peligrosas y su contenido de una cadena HTML:

var etiquetasRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
var cadenaHTML = "<div>Hola, <script>alert('¡Soy un script malicioso!');</script></div>";
var limpio = cadenaHTML.replace(etiquetasRegex, "");
window.alert(limpio);