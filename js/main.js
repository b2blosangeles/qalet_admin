var app = angular.module('qaletApp', [
	'ngCookies',
	'ngRoute'
]);
app.controller('mainController', function($rootScope, $scope, $location, $http, $cookies){ 
	$rootScope.$on('$routeChangeStart', function(){ 
		if (!$rootScope._super) $rootScope._super={};
		$rootScope._super.option = $location.$$path;
	});
	
	$scope.signin = function() {
		$http({
		  method: 'GET',
		  url: '/api/auth.js'
		}).then(function successCallback(response) {
			console.log(response);
		  }, function errorCallback(response) {
			console.log(response);
		  });		
		$rootScope._super.session = {uid:1, user:'John'};
		
	}

	$scope.signout = function() {
		delete $rootScope._super.session;
	}
	
	$scope.isSignin = function(v) {
		return (($rootScope._super.session) && ($rootScope._super.session.uid))?true:false;
	} 
	
});

app.controller('topMenuController', function($rootScope, $scope, $location, $cookies){ 
	$scope.isActive = function(v) {
		return ($location.$$path == v)?'active':'';
	} 
});

app.config(function($routeProvider) {
  $routeProvider.when('/',              {templateUrl: 'uiview/home.html', reloadOnSearch: false});
  $routeProvider.when('/about',			{templateUrl: 'uiview/about.html', reloadOnSearch: false}); 
  $routeProvider.when('/contact',		{templateUrl: 'uiview/contact.html', reloadOnSearch: false}); 
  $routeProvider.when('/docs',			{templateUrl: 'uiview/docs.html', reloadOnSearch: false});   
});
