miDocumento = prompt("Ingrese un DNI");

function validar(documento) {
  switch (documento.length) {
    case 8:
      console.log("true")
      break;

    default:
      console.log("false")
      break;
  }
}

validar(miDocumento);