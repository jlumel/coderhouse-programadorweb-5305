let arrayNumeros = [2, 5, 25, 30, 65, 80, 101];

for (let i = 0; i < arrayNumeros.length; i++) {
    let number = arrayNumeros[i];
    let miResultado = number % 2;
    if (miResultado === 1) {
        miResultado = "impar"
    } else {
      miResultado = "par"  
    }
    console.log("El numero " + number + " es " + miResultado);
}
