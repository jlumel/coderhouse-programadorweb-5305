let myNumber = 0;

$(document).keydown(function(event) {
  switch (event.which) {
    case 13:
      myNumber = 0;
      break;
    case 38:
      myNumber++;
      break;
    case 40:
      myNumber--;
      if (myNumber < 0) myNumber = 0;
      break;
    default:
      break;
  }

  printNumber();
});

function printNumber() {
  $('#number').html(myNumber);
}
