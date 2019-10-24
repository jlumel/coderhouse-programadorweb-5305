let input = document.getElementById("email");

// function validarInputBlur(event) {
//     let inputNode = event.target;
//     if (inputNode.value.indexOf("@") !== -1 && inputNode.value.indexOf(".") !== -1) {
//         inputNode.className = "form-control is-valid";
//     } else {
//         inputNode.className = "form-control is-invalid";
//     }
// };

function validarInputInput(event) {
    let inputNode = event.target;
    if (inputNode.value.indexOf("@") !== -1 && inputNode.value.indexOf(".") !== -1) {
        inputNode.className = "form-control is-valid";
    } else {
        inputNode.className = "form-control is-invalid";
    }
};

// input.onblur = validarInputBlur;

input.oninput = validarInputInput;