$(document).ready(function() {

let body = $("body")
body.append("<div></div>")
let div = $("div")
div.addClass("container")
div.append("<table></table>")
let table = $("table")
table.addClass("table table-dark")

table.append("<thead></thead>")
let thead = $("thead")
thead.append("<tr></tr>")
let tr1 = $("tr")
tr1.append("<th>#</th>")
tr1.append("<th>Nombre</th>")
tr1.append("<th>Género</th>")
tr1.append("<th>Altura</th>")
tr1.append("<th>Peso</th>")
tr1.append("<th>Color de ojos</th>")
tr1.append("<th></th>")
$("th").attr("scope", "col")

table.append("<tbody></tbody>")

let tbody = $("tbody")
tbody.attr("id", "tableBody")

tbody.append("<tr></tr>")
let tr2 = tbody.children()
tr2.attr("id", "1")
tr2.attr("style", "overflow: hidden;")
tr2.append("<td>1</td>")
tr2.append("<td>Luke Skywalker</td>")
tr2.append("<td>Hombre</td>")
tr2.append("<td>172 cm</td>")
tr2.append("<td>77 kg</td>")
tr2.append("<td>Azul</td>")
tr2.append("<td><button>Eliminar</button></td>")
let td1 = tr2.children().next().next().next().next().next().next()
td1.attr("style","padding:0")

tbody.append("<tr></tr>")
let tr3 = tbody.children().next()
tr3.attr("id", "2")
tr3.attr("style", "overflow: hidden;")
tr3.append("<td>2</td>")
tr3.append("<td>Juan Perez</td>")
tr3.append("<td>Hombre</td>")
tr3.append("<td>175 cm</td>")
tr3.append("<td>80 kg</td>")
tr3.append("<td>Marron</td>")
tr3.append("<td><button>Eliminar</button></td>")
let td2 = tr3.children().next().next().next().next().next().next()
td2.attr("style","padding:0")


let btn = $("button")
btn.attr("type", "button")
btn.attr("class","btn btn-danger")

btn.click(function() {
    boton =$(this)
    let td = boton.parent()
    let tr = td.parent()
    tr.fadeOut(700, function() {
        
    })
})

})