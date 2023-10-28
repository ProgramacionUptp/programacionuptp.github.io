var resultados = new Array(11).fill(0); // Array para almacenar el número de apariciones de cada suma (índices 2 al 12)

for (var i = 0; i < 36000; i++) {
  var dado1 = Math.floor(Math.random() * 6) + 1; // Lanzamiento del primer dado (número aleatorio entre 1 y 6)
  var dado2 = Math.floor(Math.random() * 6) + 1; // Lanzamiento del segundo dado (número aleatorio entre 1 y 6)
  var suma = dado1 + dado2; // Suma de los resultados de los dados

  resultados[suma - 2]++; // Incrementar el contador de la suma correspondiente en el array
}

for (var j = 2; j <= 12; j++) {
  console.log("Suma " + j + ": " + resultados[j - 2] + " apariciones");
}