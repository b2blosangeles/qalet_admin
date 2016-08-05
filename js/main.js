var app = angular.module('qaletApp', [
	'ngCookies',
	'ngRoute'
]);
app.controller('homepageController', function($rootScope, $scope, $cookies){ 

});

app.config(function($routeProvider) {
  $routeProvider.when('/',              {templateUrl: 'home.html', reloadOnSearch: false});
  $routeProvider.when('/scroll',        {templateUrl: 'scroll.html', reloadOnSearch: false}); 
});
