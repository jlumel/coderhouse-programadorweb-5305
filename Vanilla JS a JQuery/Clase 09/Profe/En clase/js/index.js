function showMessage() {
  alert('El usuario hizo clic');
}

function showBlurMessage() {
  alert('El usuario perdió el foco');
}

function showMessageOver() {
  alert('El usuario paso el mouse sobre el botón');
}

function showMessageWithEvent(e) {
  alert('El usuario hizo clic en el elemento con ID: ' + e.target.id);
}

let button = document.getElementById('button');
button.onclick = showMessageWithEvent;
button.onmouseover = showMessageOver;

let inputText = document.getElementById('input-text');
inputText.onblur = showMessageOnBlurInput;

function showMessageOnBlurInput(e) {
  let value = e.target.value;

  alert('El usuario perdió el foco y el valor es: ' + value);
}
