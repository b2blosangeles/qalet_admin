var app = angular.module('qaletApp', [
	'ngCookies',
	'ngRoute'
]);
app.controller('mainController', function($rootScope, $scope, $location, $cookies){ 
	$rootScope.$on('$routeChangeStart', function(){ 
		$rootScope._super={};
		$rootScope._super.option = $location.$$path;
		console.log($rootScope._super);
	});
});

app.config(function($routeProvider) {
  
  $routeProvider.when('',              				{templateUrl: 'uiview/home.html', reloadOnSearch: false});	
  $routeProvider.when('/',              			{templateUrl: 'uiview/home.html', reloadOnSearch: false});
  $routeProvider.when('/microservicesList',			{templateUrl: 'uiview/microservicesList.html', reloadOnSearch: false}); 
});
