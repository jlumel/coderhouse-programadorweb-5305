let diaDeLaSemana = prompt("Ingrese un dia de la semana: ");

switch (diaDeLaSemana.toLowerCase()) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'miércoles':
    case 'jueves':
    case 'viernes':
        console.log("Es un dia habil");
       break;
    case 'sabado':
    case 'sábado':
    case 'domingo':
        console.log('Es un dia de fin de semana');
    break;

    default:
        console.log('No es un dia valido');
        break;
}