let promptGenero = prompt("Ingrese su genero");

let promptEdad = parseInt(prompt("Ingrese su edad"));

let genero;

switch (promptGenero.toLowerCase()) {
    case "masculino":
    case "hombre":
        genero = "Sr. ";
            break;
    case "femenino":
    case "mujer":
        genero ="Sra. ";
        break;
    case "no binario":
        genero = "Sx. ";
        break;

    default:
        genero = "Genero no valido";
        break;
}

let edad;

if (promptEdad >= 18) {
   edad = "usted es mayor de edad, puede ingresar" 
} else {
   edad= "usted es menor de edad, no puede ingresar" 
}

console.log (genero + edad);