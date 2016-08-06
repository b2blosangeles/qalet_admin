var app = angular.module('qaletApp', [
	'ngCookies',
	'ngRoute'
]);
app.controller('mainController', function($rootScope, $scope, $location, $http, $cookies, $timeout){ 
	
	$rootScope.Q = {};
	
	$rootScope.$on('$routeChangeStart', function(){ 
		if (!$rootScope._super) $rootScope._super={};
		$rootScope._super.option = $location.$$path;
	});
	
	$scope.isSignin = function(v) {
		return (($rootScope._super.session) && ($rootScope._super.session.uid))?true:false;
	}; 	
	
	$scope.signout = function() {
		$rootScope.progress_modal('on')
		$http({
		  method: 'POST',
		  url: '/api/authA.js',
		  data: {opt:'signout'}
		}).then(function successCallback(response) {
		//	delete $rootScope._super.session;
			$rootScope.progress_modal('off')
		  }, function errorCallback(response) {
			console.log(response);
			$rootScope.progress_modal('off')
			$timeout(
				function() {
					$rootScope.popup('on');
				}, 3000
				
			)
			
			
		  });
	};
	$rootScope.progress_modal = function(code) {
		//$rootScope.Q['modal'] {
		//	
		//}
		
		if (code == 'on') {
			$('.modal').modal();
		} else {
			$('.modal').modal('hide');
		}
	}
	
	$rootScope.popup = function(code) {
	//	$rootScope.Q = '222';
		if (code == 'on') {
			$('.modal').modal();
		} else {
			$('.modal').modal('hide', function() {alert(66); });
		}
	}
	
});


app.controller('modalController', function($rootScope, $scope, $location, $http, $cookies){ 
	
	$scope.$watch(
		function() {
			return $rootScope.Q;
		},
		function(curv, prev) {	
			if (curv) {
		//		alert(curv);
			}
		}
	);	

});	

app.controller('authController', function($rootScope, $scope, $location, $http, $cookies){ 
	
	$scope.signin = function() {
		$rootScope.progress_modal('on');
		$http({
		  method: 'POST',
		  url: '/api/auth.js',
		  data: {opt:'signin', form_data:$scope.form_auth}
		}).then(function successCallback(response) {
			$rootScope._super.session = response.data;
			$rootScope.progress_modal('off');
			console.log(response);
		  }, function errorCallback(response) {
			  
			   alert(response.status +  response.data);
			   $rootScope.progress_modal('off');
		  });				
	}
	$scope.signup = function() {
		$rootScope.progress_modal('on');
		setTimeout(function() {
			$rootScope.progress_modal('off');
		}, 2000);
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
