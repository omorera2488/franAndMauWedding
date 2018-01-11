(function() {
  'use strict';

  angular
    .module('web')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/confirmar', {
        templateUrl: 'app/confirm/confirm.html',
        controller: 'ConfirmController',
        controllerAs: 'confirm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
