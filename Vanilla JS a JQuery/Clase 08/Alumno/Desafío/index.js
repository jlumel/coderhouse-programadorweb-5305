$(document).ready(function() {

  var student = {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
  }

function createStudentNode(studentParam) {
    
    let list = $("#studentslist")

    list.append('<li class="list-group-item" id="22999333"><h1>' + studentParam.firstName + ' ' + studentParam.lastName + '</h1><h3>' + studentParam.dni + '</h3><p>' + studentParam.email + '</p></li>')
    
}

  createStudentNode(student)
  
})