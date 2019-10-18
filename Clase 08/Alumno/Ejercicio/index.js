var list = document.createElement("ul")

list.id = "mainList"

list.className = "list-group"

let listItemNode

let miNombre = prompt("Ingrese su nombre")

do {
   
   listItemNode = document.createElement('li')
  
   listItemNode.innerHTML = miNombre

   listItemNode.className = "list-group-item"
  
   list.appendChild(listItemNode)

   miNombre = prompt("Ingrese su nombre")

} while (miNombre !== "exit");

// var texts = ['Ed', 'Edd', 'Eddy' ]

// var listItemNode

// for(var i = 0; i < texts.length; i++){
    
//     listItemNode = document.createElement('li')
  
//     listItemNode.innerHTML = texts[i]

//     listItemNode.className = "list-group-item"
  
//     list.appendChild(listItemNode)
//   }

document.body.appendChild(list)

