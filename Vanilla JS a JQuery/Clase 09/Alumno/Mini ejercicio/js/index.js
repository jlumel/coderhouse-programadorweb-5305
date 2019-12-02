$(document).ready(function() {
    let button = $("#btn");
    let input = $("#age");
    
    
    
    button.click(function() {
        valor = input.val();
        if (isNaN(valor) === true) {
            console.log("Valor incorrecto");  
        } else {
            if (Number.isInteger(parseInt(valor)) === true && valor >= 18) {
               console.log("Es mayor de edad") 
            } else {
                console.log("Es menor de edad");   
            }
        }    
        })
})
