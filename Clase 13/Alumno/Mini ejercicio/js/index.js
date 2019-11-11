$(document).ready(function() {
    let trash = $("i")
    console.log(trash)

    trash.click(function() {
    
        let eliminar = $(this)
        eliminar.parent().remove()
    }) 
})
