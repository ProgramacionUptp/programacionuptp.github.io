// validador.js

// Obtener los elementos del formulario
var formulario = document.getElementById('registro');
var nombre = document.getElementById('registro_nombre');
var apellido = document.getElementById('registro_apellido');
var email = document.getElementById('registro_email');
var password = document.getElementById('registro_password');
var comentarios = document.getElementById('registro_comentarios');
var condiciones = document.getElementById('registro_condiciones');

// Función para validar el campo nombre
function validarNombre() {
  if (nombre.value.trim() === '') {
    alert('Por favor, introduce tu nombre.');
    return false;
  }
  return true;
}

// Función para validar el campo apellido
function validarApellido() {
  if (apellido.value.trim() === '') {
    alert('Por favor, introduce tu apellido.');
    return false;
  }
  return true;
}

// Función para validar el campo email
function validarEmail() {
  if (email.value.trim() === '') {
    alert('Por favor, introduce tu email.');
    return false;
  }
  // Expresión regular para validar el formato del email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert('Por favor, introduce una dirección de email válida.');
    return false;
  }
  return true;
}

// Función para validar el campo password
function validarPassword() {
  if (password.value.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres.');
    return false;
  }
  // Expresión regular para validar que la contraseña contenga al menos una letra minúscula, una letra mayúscula y un dígito
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  if (!passwordRegex.test(password.value)) {
    alert('La contraseña debe contener al menos una letra minúscula, una letra mayúscula y un dígito.');
    return false;
  }
  return true;
}

// Función para validar el campo comentarios
function validarComentarios() {
  if (comentarios.value.length > 50) {
    alert('El campo de comentarios no debe exceder los 50 caracteres.');
    return false;
  }
  return true;
}

// Función para validar el campo condiciones
function validarCondiciones() {
  if (!condiciones.checked) {
    alert('Debes aceptar las condiciones del servicio.');
    return false;
  }
  return true;
}

// Función para validar el formulario completo
function validarFormulario(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Validar cada campo individualmente
  var esNombreValido = validarNombre();
  var esApellidoValido = validarApellido();
  var esEmailValido = validarEmail();
  var esPasswordValido = validarPassword();
  var sonComentariosValidos = validarComentarios();
  var sonCondicionesValidas = validarCondiciones();

  // Enviar el formulario si todos los campos son válidos
  if (esNombreValido && esApellidoValido && esEmailValido && esPasswordValido && sonComentariosValidos && sonCondicionesValidas) {
    formulario.submit();
  }
}

// Agregar eventos de validación a cada campo al perder el foco
nombre.addEventListener('blur', validarNombre);
apellido.addEventListener('blur', validarApellido);
email.addEventListener('blur', validarEmail);
password.addEventListener('blur', validarPassword);
comentarios.addEventListener('blur', validarComentarios);
condiciones.addEventListener('blur', validarCondiciones);

// Agregar evento de validación al enviar el formulario
formulario.addEventListener('submit', validarFormulario);