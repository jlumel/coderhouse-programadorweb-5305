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


  

miAlumno = prompt("Ingrese un nombre");

 while (miAlumno !== "exit"){
  
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
  
  console.log(miBusqueda(miAlumno,studentsList))
  miAlumno = prompt("Ingrese un nombre");
 }

