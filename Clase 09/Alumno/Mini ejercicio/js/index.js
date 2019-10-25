let button = document.getElementById("btn");
let input = document.getElementById("age");

function validarEdadButton(event) {
    valor = parseInt(input.value);
    if (Number.isNaN(valor) == true) {
        console.log("Valor incorrecto");  
    } else {
        if (Number.isInteger(valor) == true && valor >= 18) {
           console.log("Es mayor de edad") 
        } else {
            console.log("Es menor de edad");   
        }
         
    }
};

button.onclick = validarEdadButton;