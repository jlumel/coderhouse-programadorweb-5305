import crossroads from 'crossroads'

function router () {
  crossroads.addRoute('', function () {
    console.log('Home page')
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router

crossroads.addRoute('#/contact', function () {
    console.log('Contact page')
  })
  
  $('#root').load('./partials/home.html', function(){
    console.log('Se cargo la home')
  })