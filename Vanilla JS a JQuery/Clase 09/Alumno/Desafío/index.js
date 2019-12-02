let input = $("#email");

input.keyup(function() {
    let inputNode = $(this);
    if (inputNode.val().indexOf("@") !== -1 && inputNode.val().indexOf(".") !== -1) {
        inputNode.removeClass("is-invalid");
        inputNode.addClass("is-valid")
    } else {
        inputNode.removeClass("is-valid");
        inputNode.addClass("is-invalid")
    }
})