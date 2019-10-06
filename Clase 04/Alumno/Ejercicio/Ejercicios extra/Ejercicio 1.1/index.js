let arrayNumeros = [2, 5, 25, 30, 65, 80, 101];

function imprimirParOImpar(numero) {
  for (let i = 0; i < numero.length; i++) {
    let number = numero[i];
    let mod = number % 2;
    let miResultado;
    switch (mod) {
      case 1:
        miResultado = "Este numero es impar"
        break;
    
      case 0:
        miResultado = "Este numero es par"
        break;
    }
  console.log(miResultado);
  }

}
imprimirParOImpar(arrayNumeros);