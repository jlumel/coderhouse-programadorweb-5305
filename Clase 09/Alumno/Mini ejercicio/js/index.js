let button = document.getElementsByClassName("btn btn-primary");
let input = document.getElementById("age");

function validarEdadInput(event) {
    let inputNode = event.target;
    if (parseInt(inputNode.value) >= 18) {
        console.log("Es mayor de edad");
    } else  {
        console.log("Es menor de edad");
    }
};

function validarEdadButton() {
    input.oninput = validarEdadInput;
};

button.onclick = validarEdadButton;