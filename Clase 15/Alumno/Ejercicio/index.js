var request = $.ajax({
    url: "https://swapi.co/api/people/5",
    method: "GET"
  })
  
  request.done(function(data) {
    console.log( 'Respuesta: ',data)
    let div = $("div")
div.append("<h2>Nombre: " + data.name + "</h2><br><h2>Altura y peso " + data.height + "-" + data.mass + "</h2><br><h2>Sexo: " + data.gender + "</h2><br><h2>Peliculas:</h2><br><ul></ul>")
lista = $("ul")
let films = data.films

for (let i = 0; i < films.length; i++) {
    const pelis = films[i];
    lista.append("<li>" + pelis + "</li>")
}

  });
  
  request.fail(function( error ) {
    console.log( 'Error: ' , error )
  })
