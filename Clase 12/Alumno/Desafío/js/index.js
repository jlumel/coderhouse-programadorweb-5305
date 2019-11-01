let inputEmail = $(".form-control");

inputEmail.keyup(function() {
    let email = $(this)
    if (email.val().indexOf("@") !== -1 &&
     email.val().lastIndexOf(".") > email.val().indexOf("@") && email.val().length > 4) {
        if (email.hasClass("is-invalid")) {
            email.removeClass("is-invalid")
        }
        email.removeClass("")
        email.addClass("is-valid");
    } else {
        if (email.hasClass("is-valid")) {
            email.removeClass("is-valid")
        }
        email.addClass("is-invalid");
    }
}) 