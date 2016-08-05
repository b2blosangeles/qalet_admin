var app = angular.module('qaletApp', [
	'ngCookies',
	'ngRoute'
]);
app.controller('homepageController', function($rootScope, $scope, $cookies){ 

});

app.config(function($routeProvider) {
  $routeProvider.when('/',              {templateUrl: 'uiview/home.html', reloadOnSearch: false});
  $routeProvider.when('/microservicesList',        {templateUrl: 'uiview/microservicesList.html', reloadOnSearch: false}); 
});
