var studentsList = [
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
  ]
  
  let miAlumno;

function miBusqueda(textoIngresado, alumnos) {
  let posicion = -1;
  for (let i = 0; i < alumnos.length; i++) {
    let alumno = alumnos[i];
        if (alumno.firstName === textoIngresado || alumno.lastName === textoIngresado)  {
      posicion = i
    }
  }
    return posicion 
  }

do {
  miAlumno = prompt("Ingrese un nombre");

  console.log(miBusqueda(miAlumno,studentsList));

} while (miAlumno !== "exit");