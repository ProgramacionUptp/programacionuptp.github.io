// Objeto Persona
function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  
  Persona.prototype.obtDetalles = function() {
    window.alert("Nombre: " + this.nombre);
    window.alert("Edad: " + this.edad);
    window.alert("Género: " + this.genero);
  };
  
  // Objeto Estudiante
  function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  
  Estudiante.prototype = Object.create(Persona.prototype);
  Estudiante.prototype.constructor = Estudiante;
  
  Estudiante.prototype.registrar = function() {
    window.alert("El estudiante " + this.nombre + " ha sido registrado en el curso " + this.curso + ", grupo " + this.grupo + ".");
  };
  
  // Objeto Profesor
  function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  
  Profesor.prototype = Object.create(Persona.prototype);
  Profesor.prototype.constructor = Profesor;
  
  Profesor.prototype.asignar = function() {
    window.alert("El profesor " + this.nombre + " ha sido asignado a la asignatura " + this.asignatura + ", nivel " + this.nivel + ".");
  };
  
  // Casos de prueba
  var persona = new Persona("Juan", 30, "Masculino");
  persona.obtDetalles();

  var estudiante = new Estudiante("María", 20, "Femenino", "1º", "A");
  estudiante.obtDetalles();
  estudiante.registrar();

  var profesor = new Profesor("Pedro", 45, "Masculino", "Matemáticas", "Avanzado");
  profesor.obtDetalles();
  profesor.asignar();