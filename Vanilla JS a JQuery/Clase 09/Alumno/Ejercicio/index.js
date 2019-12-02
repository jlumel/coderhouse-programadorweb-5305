$(document).ready(function() {

    let input = $("#firstName");
    
    input.blur(function() {

        let inputNode = $(this);
        if (inputNode.val() === "") {
            inputNode.removeClass("is-valid")
            inputNode.addClass("is-invalid");
        } else {
            inputNode.removeClass("is-invalid");
            inputNode.addClass("is-valid");
        }
    })
})




