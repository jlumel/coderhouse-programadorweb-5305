let studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
];

function getPositionStudent(nameOrLastname) {
  for (let i = 0; i < studentsList.length; i++) {
    const student = studentsList[i];
    if (
      nameOrLastname === student.firstName ||
      nameOrLastname === student.lastName
    ) {
      return i;
    }
  }

  return -1;
}

let nameStudent = prompt('Ingrese el nombre o apellido del estudiante: ');
let positionStudent = getPositionStudent(nameStudent);
let resultado = document.getElementById('resultado');

if (positionStudent === -1) {
  console.log('No se pudo encontrar el estudiante');
} else {
  console.log(
    'Se ha encontrado el estudiante en la posición ' + positionStudent
  );
}
