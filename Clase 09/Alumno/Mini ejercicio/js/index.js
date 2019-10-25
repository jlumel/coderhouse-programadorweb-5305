let button = document.getElementsByClassName("btn btn-primary");
let input = document.getElementById("age");

function validarEdadButton(event) {
    if (parseInt(input.value) >= 18) {
        console.log("Es mayor de edad");  
    } else {
        console.log("Es menor de edad");  
    }
};

button.onclick = validarEdadButton;