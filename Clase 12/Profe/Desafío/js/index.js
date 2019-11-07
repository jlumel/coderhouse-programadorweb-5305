let emailTxt = $('#emailTxt');
emailTxt.blur(function() {
  let value = $(this).val();
  if (
    value === undefined ||
    value === null ||
    value.length === 0 ||
    value.indexOf('@') < 0 ||
    value.indexOf('.') < 0
  ) {
    emailTxt.removeClass('is-valid').addClass('is-invalid');
  } else {
    emailTxt.removeClass('is-invalid').addClass('is-valid');
  }
});
