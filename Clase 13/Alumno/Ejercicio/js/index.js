$(document).ready(function() {

let h1 = $("#numtext");

$(document).keydown(handleKeyDown)

function handleKeyDown(event){
    switch (event.which) {
        case 13: 
        h1.html("0")
        break;

        case 38:
        h1.html(parseInt(h1.html()) + 1)
        break;

        case 40: 
        if (parseInt(h1.html()) > 0) {
        h1.html(parseInt(h1.html()) - 1)   
        }
            break;
    
        default:

            break;
    }
    }

})