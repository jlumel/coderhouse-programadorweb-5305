let nombreTxt = $('#nombreTxt');
let emailTxt = $('#emailTxt');
let comentariosTxt = $('#comentarioTxt');
let enviarBtn = $('#enviarBtn');

enviarBtn.attr('disabled', true);

nombreTxt.blur(requiredInputValue);
comentariosTxt.blur(requiredInputValue);

emailTxt.blur(function() {
  let value = $(this).val();
  if (
    value === undefined ||
    value.length === 0 ||
    value.indexOf('@') === -1 ||
    value.indexOf('.') === -1
  ) {
    $(this).addClass('is-invalid');
  } else {
    $(this).removeClass('is-invalid');
  }

  enableButton();
});

function requiredInputValue() {
  let value = $(this).val();
  if (value === undefined || value.length === 0) {
    $(this).addClass('is-invalid');
  } else {
    $(this).removeClass('is-invalid');
  }

  enableButton();
}

function enableButton() {
  let disabled = true;

  if (
    !nombreTxt.hasClass('is-invalid') &&
    !emailTxt.hasClass('is-invalid') &&
    !comentariosTxt.hasClass('is-invalid')
  ) {
    disabled = false;
  }

  enviarBtn.attr('disabled', disabled);
}
