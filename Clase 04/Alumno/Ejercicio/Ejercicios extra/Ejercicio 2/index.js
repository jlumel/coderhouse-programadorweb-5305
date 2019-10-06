let misNumeros = 0;
let miPrompt;
function suma(valor) {
  console.log(valor)
 }
do {

miPrompt = parseInt(prompt("Ingrese un numero"));
misNumeros = miPrompt + misNumeros;
 
} while (miPrompt !== 0)

suma(misNumeros);