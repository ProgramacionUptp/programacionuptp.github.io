function anade() {
    // Obtener la lista existente
    var lista = document.getElementById('lista');
  
    // Crear un nuevo elemento de lista
    var nuevoElemento = document.createElement('li');
  
    // Establecer el contenido del nuevo elemento
    nuevoElemento.textContent = 'Nuevo elemento';
  
    // Añadir el nuevo elemento a la lista existente
    lista.appendChild(nuevoElemento);
  }