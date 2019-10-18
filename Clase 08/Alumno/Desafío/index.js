var student = {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
  }

function createStudentNode(studentParam) {
    let list = document.getElementById("studentslist")

    let listItemNode = document.createElement("li")
    listItemNode.className ="list-group-item"
    listItemNode.id = studentParam.dni
    list.appendChild(listItemNode)

    let nameItemNode = document.createElement("h1")
    nameItemNode.innerHTML = studentParam.firstName + " " + studentParam.lastName
    listItemNode.appendChild(nameItemNode)

    let dniItemNode = document.createElement("h2")
    dniItemNode.innerHTML = "DNI:" + " " + studentParam.dni
    listItemNode.appendChild(dniItemNode)

    let emailItemNode = document.createElement("h3")
    listItemNode.appendChild(emailItemNode)

    let paragraph = document.createElement("p")
    paragraph.innerHTML = "E-mail:" + " " + studentParam.email
    emailItemNode.appendChild(paragraph)
    
}

  createStudentNode(student)