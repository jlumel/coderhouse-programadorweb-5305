import {setLocalList} from '../utils/localStorage'

function peopleController() {
    console.log('Se cargo Personajes');
  }

let listaPersonajes = []

function getData() {
    var request = $.ajax({
        url: "https://swapi.co/api/people",
        method: "GET"
      })
      
      request.done(function( data ) {
        console.log( 'Respuesta: ',data )
        let datos = data.results
        let index = 1
    for (let i = 0; i < datos.length; i++) {
        const personaje = datos[i];
    switch (personaje.gender) {
        case "male":
            personaje.gender = "hombre"
            break;
        case "female":
            personaje.gender = "mujer"
    
        default:
            break;
    }

    switch (personaje.eye_color) {
        case "red":
            personaje.eye_color = "rojo"
            break;
        case "blue":
            personaje.eye_color = "azul"
            break;
            case "brown":
            personaje.eye_color = "marron"
            break;
            case "yellow":
            personaje.eye_color = "amarillo"
            break;    
        default:
            break;
    }
     
    let tbody = $("#tableBody")    
    tbody.append('<tr><td>' + index + '</td><td>' + personaje.name + '</td><td>' + personaje.gender + '</td><td>' + personaje.height + '</td><td>' + personaje.mass + '</td><td>' + personaje.eye_color + '</td><td><button class="btn btn-success">Guardar</button></td></tr>')
    let tr2 = tbody.children()
    tr2.attr("style", "overflow: hidden;")

    index++
    }

    $(".btn").click(function() {
        let boton = $(this)
        let td = boton.parent()
        let tr = td.parent()

    
        
        var personaje = {
            name: tr.children()[1].innerHTML
        }

        listaPersonajes.push(personaje)
        setLocalList("listaPersonajes",listaPersonajes);
        tr.fadeOut(700, function() {
            
        })
        
    })
    
});
      
      request.fail(function( error ) {
        console.log( 'Error: ' , error )
      })  

}

getData()
  
export default peopleController;