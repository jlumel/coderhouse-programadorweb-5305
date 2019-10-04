let examResults = [7, 5, 6, 4, 3, 2, 8]

function calcularPromedio(resultadosExamenes) {
    
    let suma = 0;
    let prom;

    for (let i = 0; i < resultadosExamenes.length; i++) {
    let nota = resultadosExamenes[i];
    suma += nota;
    }

prom = suma / resultadosExamenes.length;

return prom;

}

console.log("El promedio de las notas es: " + calcularPromedio(examResults));

// let promedio = calcularPromedio(examResults);

// console.log ("El promedio es: " + promedio);