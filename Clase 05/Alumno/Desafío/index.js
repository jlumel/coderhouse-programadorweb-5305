var students = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987,
      email: 'juan@gmail.com'
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989,
      email: 'ana@gmail.com'
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956,
      email: 'pedro@gmail.com'
    }
  ]

function Student(firstName,lastName,dni,email,id) {
    this.firstName
    this.lastName
    this.dni
    this.email
    id = Math.random()

    this.getId = function() {
        console.log(id)
    }
    this.getFullName = function() {
        console.log(firstName + " " + lastName)
    }
}

// let student1 = new Student("Juan","Pérez",45678987,"juan@gmail.com");
// student1.getId()
// student1.getFullName()

// let student1 = new Student(students[0].firstName,students[0].lastName,students[0].dni,students[0].email);
// student1.getId()
// student1.getFullName()

var primerEstudiante = students[0];
let student1 = new Student(primerEstudiante.firstName,primerEstudiante.lastName,primerEstudiante.dni,primerEstudiante.email);
student1.getId()
student1.getFullName()

// let student2 = new Student("Ana","Fernandez",45678989,"ana@gmail.com");
// student2.getId()
// student2.getFullName()

// let student3 = new Student("Pedro","Mármol",45678956,"pedro@gmail.com");
// student3.getId()
// student3.getFullName()