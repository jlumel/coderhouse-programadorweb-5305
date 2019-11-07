let boxes = $('.box');
let player = 0;

boxes.click(function() {
  let box = $(this);
  if (box.hasClass('circle') || box.hasClass('cross')) {
    return;
  }

  player++;
  if (player % 2 == 0) {
    box.addClass('cross');
  } else {
    box.addClass('circle');
  }
});
