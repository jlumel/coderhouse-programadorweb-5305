$(document).ready(function () {

let nombre = $("#firstName")
let email = $("#email")
let comment = $("#comments")
let boton = $("#submitButton")

function habilitarBtn() {
    if (nombre.hasClass("is-valid") === true && email.hasClass("is-valid") === true && comment.hasClass("is-valid") === true) {
        boton.attr("disabled",false)
    } else {
        boton.attr("disabled",true)
    }
}

nombre.on('blur', function() {
    let inputNombre = $(this)
    if (inputNombre.val().length > 0) {
        if (inputNombre.hasClass("is-invalid")) {
            inputNombre.removeClass("is-invalid")
        }
        inputNombre.addClass("is-valid")
    } else {
        if (inputNombre.hasClass("is-valid")) {
            inputNombre.removeClass("is-valid")
        }
        inputNombre.addClass("is-invalid") 
    }
    habilitarBtn()
})

email.on('blur', function() {
    let inputEmail = $(this)
    if (inputEmail.val().length > 4 && inputEmail.val().indexOf("@") !== -1 && inputEmail.val().indexOf(".") !== -1) {
        if (inputEmail.hasClass("is-invalid")) {
            inputEmail.removeClass("is-invalid")
        }
        inputEmail.addClass("is-valid")
    } else {
        if (inputEmail.hasClass("is-valid")) {
            inputEmail.removeClass("is-valid")
        }
        inputEmail.addClass("is-invalid") 
    }
    habilitarBtn()
})

comment.on('blur', function() {
    let inputComment = $(this)
    if (inputComment.val().length !== 0) {
        if (inputComment.hasClass("is-invalid")) {
            inputComment.removeClass("is-invalid")
        }
        inputComment.addClass("is-valid")
        $("#submitButton").disabled = true
    } else {
        if (inputComment.hasClass("is-valid")) {
            inputComment.removeClass("is-valid")
        }
        inputComment.addClass("is-invalid") 
        $("#submitButton").disabled = false
    }
    habilitarBtn() 
})

})