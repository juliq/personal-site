const myApp = angular.module('myApp', ['ngRoute', 'angularJSTypedEffect']);

// app configuration
myApp.config(function($routeProvider){
  // define our client side routes
  $routeProvider
  .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'AppController as vm'
  })
  .when('/contact', {
      templateUrl: '/views/contact.html',
      controller: 'AppController as vm'
  })
  .otherwise(
      { redirectTo: '/home' }
  );
});