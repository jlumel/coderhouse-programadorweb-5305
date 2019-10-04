let miOperacion = prompt("Ingrese la operacion a realizar");
let miNumero1 = parseInt(prompt("Ingrese el primer numero"));
let miNumero2
let miResultado

switch (miOperacion) {
    case "div":
        do{
            miNumero2 = parseInt(prompt("Ingrese el segundo numero"))
              
            }while(miNumero2 === 0)
            
            miResultado = miNumero1 / miNumero2;

            break;
       
    case "sum":
        miNumero2 = parseInt(prompt("Ingrese el segundo numero"));
        miResultado = miNumero1 + miNumero2;
        break;

    case "resta":
        miNumero2 = parseInt(prompt("Ingrese el segundo numero"));
        miResultado = miNumero1 - miNumero2;
        break;

    case "multiplicacion":
        miNumero2 = parseInt(prompt("Ingrese el segundo numero"));
        miResultado = miNumero1 * miNumero2;
        break;
    
    default:
        miResultado = "invalido"
        break;
}

    console.log("El resultado de la " + miOperacion + " es " + miResultado)  








