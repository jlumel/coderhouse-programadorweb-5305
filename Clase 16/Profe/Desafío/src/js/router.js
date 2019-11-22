import crossroads from 'crossroads';
import homeController from './controllers/homeController';

function router() {
  crossroads.addRoute('', function() {
    $('#root').load('./partials/home.html', homeController);
  });

  crossroads.addRoute('#/contact', function() {
    console.log('Contact page');
  });

  $(window).on('hashchange', function() {
    crossroads.parse(window.location.hash);
  });

  crossroads.parse(window.location.hash);
}

export default router;
