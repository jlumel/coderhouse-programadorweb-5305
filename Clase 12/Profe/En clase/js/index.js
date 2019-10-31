//nodo por ID

var firstNameJs = document.getElementById('firstName');
var firstNameJquery = $('#firstName');

//nodos por clase
var validNodesJs = document.getElementsByClassName('is-valid');
var validNodesJquery = $('.is-valid');

//eventos
var buttonNodeJs = document.getElementById('button');
buttonNodeJs.onclick = function() {};

var buttonNodeJquery = $('#button');
buttonNodeJquery.on('click', function() {});
buttonNodeJquery.click(function() {});

var inputNodeJs = document.getElementById('input');
inputNodeJs.onblur = function() {};

var inputNodeJquery = $('#input');
inputNodeJquery.blur(function() {});
