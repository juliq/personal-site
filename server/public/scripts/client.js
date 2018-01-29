const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

// app configuration
myApp.config(function($routeProvider, $mdThemingProvider){
  console.log('config loaded');

  // define our client side routes
  $routeProvider
  .when('/URLHERE', {
      templateUrl: '/views/viewName.html',
      controller: 'CONTROLLERNAME as vm'
  })
  .when('/URLHERE', {
      templateUrl: '/views/viewName.html',
      controller: 'CONTROLLERNAME as vm'
  })
  .otherwise(
      { redirectTo: '/URLHERE' }
  );

  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('pink');
});