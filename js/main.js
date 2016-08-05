var app = angular.module('qaletApp', [
	'ngCookies',
	'ngRoute'
]);
app.controller('mainController', function($rootScope, $scope, $location, $cookies){ 
	$rootScope.$on('$routeChangeStart', function(){ 
		if (!$rootScope._super) $rootScope._super={};
		$rootScope._super.option = $location.$$path;
	});
});

app.controller('topMenuController', function($rootScope, $scope, $location, $cookies){ 
	$scope.isActive = function(v) {
		return ($location.$$path == v)?'active':'';
	} 
});

app.config(function($routeProvider) {
  $routeProvider.when('/',              			{templateUrl: 'uiview/home.html', reloadOnSearch: false});
  $routeProvider.when('/about',			{templateUrl: 'uiview/about.html', reloadOnSearch: false}); 
  $routeProvider.when('/contact',		{templateUrl: 'uiview/contact.html', reloadOnSearch: false}); 
});
