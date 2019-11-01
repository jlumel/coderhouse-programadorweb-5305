let boxes = $(".box")
let click = 2

boxes.click(function () {
    let box = $(this)
    if (box.hasClass("circle") === false && box.hasClass("cross") === false) {
        if (click % 2 === 0) {
            box.addClass("cross") 
            } else {
            box.addClass("circle")   
            } 
    click++;
    }
});