// Debe recibir como parámetro un array de
// números y devolver el calculo del promedio
//de todos los números.

// Probar la función.

var examResults = [7, 5, 6, 4, 3, 2, 8];

function calcularPromedio(resultadosExamenes) {
  let suma = 0; //undefined
  let prom;

  //El ciclo for nos ayuda a recorrer los elementos e ir sumando
  for (let i = 0; i < resultadosExamenes.length; i++) {
    let nota = resultadosExamenes[i];
    suma += nota;
  }

  prom = suma / resultadosExamenes.length;

  return prom;
}

let promedio = calcularPromedio(examResults);
console.log('El promedio es: ' + promedio);
// console.log('El promedio es: ' + calcularPromedio(examResults));
