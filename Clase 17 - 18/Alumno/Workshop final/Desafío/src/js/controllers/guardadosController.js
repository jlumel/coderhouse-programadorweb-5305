import {getLocalList} from '../utils/localStorage'  
import {setLocalList} from '../utils/localStorage'

function guardadosController() {
    console.log('Se cargo Guardados');
    let parsedList = getLocalList("listaPersonajes")

    let index = 1
  
  for (let i = 0; i < parsedList.length; i++) {
    const personaje = parsedList[i];
    
  
    let tbody = $("#tableBody")    
      tbody.append('<tr><td>' + index + '</td><td>' + personaje.name + '</td><td>' + personaje.gender + '</td><td>' + personaje.height + '</td><td>' + personaje.mass + '</td><td>' + personaje.eye_color + '</td><td><button class="btn btn-danger">Eliminar</button></td></tr>')
      let tr2 = tbody.children()
      tr2.attr("style", "overflow: hidden;")
  
      index++
  }
  $(".btn").click(function() {
    let boton = $(this)
    let td = boton.parent()
    let tr = td.parent()

    let personaje = {
      name: tr.children()[1].innerHTML,
      gender: tr.children()[2].innerHTML,
      height: tr.children()[3].innerHTML,
      mass: tr.children()[4].innerHTML,
      eye_color: tr.children()[5].innerHTML
  }

    if (parsedList.length !== 0) {
      for (let i = 0; i < parsedList.length; i++) {
          let element = parsedList[i];
          if (element.name === personaje.name) {
      
      parsedList.splice(i,1)
      tr.fadeOut(700, function() {
        
      })
      if (parsedList.length !== 0) {
        setLocalList("listaPersonajes",parsedList)
      } else {
        localStorage.removeItem("listaPersonajes")
      }
      
      
    }
  }
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
          for (let i = 0; i < parsedList.length; i++) {
            const personaje = parsedList[i];
            
          
            let tbody = $("#tableBody")    
              tbody.append('<tr><td>' + index + '</td><td>' + personaje.name + '</td><td>' + personaje.gender + '</td><td>' + personaje.height + '</td><td>' + personaje.mass + '</td><td>' + personaje.eye_color + '</td><td><button class="btn btn-danger">Eliminar</button></td></tr>')
              let tr2 = tbody.children()
              tr2.attr("style", "overflow: hidden;")
          
              index++
          } 
      } else {
          tr.remove()
          index = 1
          for (let i = 0; i < parsedList.length; i++) {
            const personaje = parsedList[i];
            
          
            let tbody = $("#tableBody")    
              tbody.append('<tr><td>' + index + '</td><td>' + personaje.name + '</td><td>' + personaje.gender + '</td><td>' + personaje.height + '</td><td>' + personaje.mass + '</td><td>' + personaje.eye_color + '</td><td><button class="btn btn-danger">Eliminar</button></td></tr>')
              let tr2 = tbody.children()
              tr2.attr("style", "overflow: hidden;")
          
              index++
          }
      }
      
  }
})
  }

  

  export default guardadosController;