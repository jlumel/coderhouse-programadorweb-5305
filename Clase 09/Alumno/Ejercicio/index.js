let input = document.getElementById("firstName");

function validarInput(event) {
    let inputNode = event.target;
    if (inputNode.value === "") {
        inputNode.classList.remove("is-valid")
        inputNode.classList.add("is-invalid");
    } else {
        inputNode.classList.remove("is-invalid");
        inputNode.classList.add("is-valid");
    }
};

input.onblur = validarInput;
