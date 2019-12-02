$(document).ready(function() {
    
    $("body").append("<ul></ul>")

    // var texts = ['Ed', 'Edd', 'Eddy' ]
    
    
    // for(var i = 0; i < texts.length; i++){
    //     const nombre = texts[i]
        
    //     $("ul").append("<li>" + nombre + "</li>")
    
    //     $("li").addClass("list-group-item")
      
        
    //   } 

    let miNombre = prompt("Ingrese su nombre")

    do {
       
        $("ul").append("<li>" + miNombre + "</li>")

        $("li").addClass("list-group-item")
    
       miNombre = prompt("Ingrese su nombre")
    
    } while (miNombre !== "exit");

})




