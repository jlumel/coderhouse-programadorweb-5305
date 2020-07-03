import {setLocalList} from '../utils/localStorage'
import {getLocalList} from '../utils/localStorage'


function peopleController() {
    console.log('Se cargo Personajes');

    let parsedList = getLocalList("listaPersonajes")
    function validarLista(buscar) {
    
    if (parsedList.length !== 0) {
        for (let i = 0; i < parsedList.length; i++) {
            const element = parsedList[i];
            if (element.name === buscar.name) {
                return false
            }
        }
        return true
    }
    return true
}
    let index = 1
    let pagina = 2
function getData(page) {
    var request = $.ajax({
        url: "https://swapi.dev/api/people/?page=" + page,
        method: "GET"
      })
      
      request.done(function( data ) {
        console.log( 'Respuesta: ',data )
        let datos = data.results
        

    for (let i = 0; i < datos.length; i++) {
        const personaje = datos[i];
    if (validarLista(personaje) === true) {
        switch (personaje.gender) {
            case "male":
                personaje.gender = "hombre"
                break;
            case "female":
                personaje.gender = "mujer"
                break;
                case "hermaphrodite":
                personaje.gender = "hermafrodita"
                break;
            case "none":
                personaje.gender = "ninguno"
                break;
            case "n/a":
                personaje.gender = "no aplica"
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
            case "blue-gray":
                personaje.eye_color = "azul grisaceo"
                break;
            case "black":
                personaje.eye_color = "negro"
                break;
            case "orange":
                personaje.eye_color = "naranja"
                break;
            case "hazel":
                personaje.eye_color = "avellana"
                break;
            case "pink":
                personaje.eye_color = "rosa"
                break;
            case "red, blue":
                personaje.eye_color = "rojo, azul"
                break;
            case "unknown":
                personaje.eye_color = "desconocido"
                break;
            case "gold":
                personaje.eye_color = "dorado"
                break;
            case "green, yellow":
                personaje.eye_color = "verde, amarillo"
                break;
            case "white":
                personaje.eye_color = "blanco"
                break;
            case "dark":
                personaje.eye_color = "oscuro"
                break;
        }
    
        if (personaje.mass === "unknown") {
            personaje.mass = "desconocido"
        } else {
            personaje.mass += ' kg'
        }
    
        if (personaje.height === "unknown") {
            personaje.height = "desconocido"
        } else {
            personaje.height += ' cm'
        }
         
        let tbody = $("#tableBody")    
        tbody.append('<tr><td>' + index + '</td><td>' + personaje.name + '</td><td>' + personaje.gender + '</td><td>' + personaje.height + '</td><td>' + personaje.mass + '</td><td>' + personaje.eye_color + '</td><td><button class="btn btn-success">Guardar</button></td></tr>')
        let tr2 = tbody.children()
        tr2.attr("style", "overflow: hidden;")
    
        index++
    }

    }



    $(".btn").click(function() {
        let boton = $(this)
        let td = boton.parent()
        let tr = td.parent()
    if (tr.children()[4] !== undefined) {
    let personaje = {
        name: tr.children()[1].innerHTML,
        gender: tr.children()[2].innerHTML,
        height: tr.children()[3].innerHTML,
        mass: tr.children()[4].innerHTML,
        eye_color: tr.children()[5].innerHTML
    } 

if (validarLista(personaje) === true) {
parsedList.push(personaje)
setLocalList("listaPersonajes",parsedList)
tr.fadeOut(700, function() {                
}) 
}
}    
    })
      request.fail(function( error ) {
      console.log( 'Error: ' , error )
      })
}) 
}

getData(1)

$("#seeMore").click(function() {
    getData(pagina)  
    pagina++ 
    if (pagina === 10) {
    $(this).attr("disabled", true)   
    } 
})

$("#inputBuscar").blur(function() {
    let input = $(this)
    let tbody = $("#tableBody")
    let tr = tbody.children()
    if (input.val().length !== 0) {
        for (let i = 0; i < tr.length; i++) {
            if ($(tr[i]).children()[1].innerHTML.toLowerCase() !== input.val().toLowerCase()) {
                $(tr[i]).remove()
            } 
        }
    } else {
        if (tr === null) {
            index = 1
            getData(1)  
        } else {
            tr.remove()
            index = 1
            getData(1)
        }
        
    }
})

}

export default peopleController;