let inputEjercicio1 = document.getElementById('firstName');
inputEjercicio1.onblur = validateInputEjercicio1;

function validateInputEjercicio1(e) {
  let element = e.target;
  let value = element.value;

  if (value === undefined || value.length === 0) {
    element.className = 'form-control is-invalid';
  } else {
    element.className = 'form-control is-valid';
  }
}
