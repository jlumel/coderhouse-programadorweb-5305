var daysOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
  ]

  for (let i = 0; i < daysOfTheWeek.length; i++) {
    let day = daysOfTheWeek[i];
    let dia
      switch (day) {
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Miércoles":
        case "Jueves":
        case "Viernes":
            dia = "Es un dia habil";
            break;
        case "Sabado":
        case "Sábado":
        case "Domingo":
            dia = "Es un dia de fin de semana";
            break;
        default:
            dia = "No es un dia valido";
            break;
    }  
    console.log(dia)
    }
    

    
     
