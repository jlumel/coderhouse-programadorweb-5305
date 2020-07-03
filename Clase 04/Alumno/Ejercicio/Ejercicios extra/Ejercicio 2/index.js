let misNumeros = 0;
let miPrompt;
let miPromptParsed
function suma(valor) {
  console.log(valor)
}
while (miPrompt !== 'exit') {

  miPrompt = prompt("Ingrese un numero");
  if (miPrompt === "exit") {
    break
  } 
    
  miPromptParsed = parseInt(miPrompt)
  misNumeros = miPromptParsed + misNumeros;

}

suma(misNumeros);