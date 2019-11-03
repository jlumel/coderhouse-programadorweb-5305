let inputNombre = $(".form-control");
let li = $("li");
let i = 0

inputNombre.blur(function() {
    
    let input = $(this)
    if (i<5) {
    li[i].innerHTML = input.val()  
    }
    
    i++  
})