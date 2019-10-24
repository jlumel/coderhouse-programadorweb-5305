let inputEjercicio2 = document.getElementById('email');
inputEjercicio2.onblur = validateInputEjercicio2;

function validateInputEjercicio2(e) {
  let element = e.target;
  let value = element.value.toString();

  if (
    value === undefined ||
    value.length === 0 ||
    value.indexOf('@').length === -1 ||
    value.indexOf('.') === -1
  ) {
    element.className = 'form-control is-invalid';
  } else {
    element.className = 'form-control is-valid';
  }
}
