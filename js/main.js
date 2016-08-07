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
		$rootScope.progress_modal('on', 'Sign out ...')
		$http({
		  method: 'POST',
		  url: '/api/authA.js',
		  data: {opt:'signout'}
		}).then(function successCallback(response) {
			$rootScope.progress_modal('off')
		  }, function errorCallback(response) {
				$rootScope.progress_modal('off');	
				/*
				$timeout(
					function() {
							
						$rootScope.popup('on', {
							title:'API Error',
							body: response.data
						});
					}, 4000
				);
				*/	
			});
	};

	
});


app.controller('modalController', function($rootScope, $scope, $location, $http, $cookies){ 
	
	$scope.$watch(
		function() {
			return $rootScope.Q.type;
		},
		function(curv, prev) {	
			if (curv) {
				if (curv == 'progress_modal') {
					$scope.progress_modal($rootScope.Q.code, $rootScope.Q.message);
				}
				if (curv == 'popup') {
					$scope.pupup($rootScope.Q.code, $rootScope.Q.message);
				}	
				$rootScope.Q = {};
			}
		}
	);	

	$scope.progress_modal = function(code, message) {
		$scope.progress_message = message;	
		if (code == 'on') {
			$('.qalet_loading_progress_bar').modal();
		} else {
			$('.qalet_loading_progress_bar').modal('hide');
		}
	}
	
	$scope.popup = function(code, message) {
		$scope.popup_message = message;
		if (code == 'on') {
			$('.qalet_popup').modal();
		} else {
			$('.qalet_popup').modal('hide');
		}
	}	
	
	$rootScope.progress_modal = function(code, message) {
		$rootScope.Q = {type:'progress_modal',code:code, message:messaage};
	}
	
	$rootScope.popup = function(code, message) {
		$rootScope.Q = {type:'popup',code:code, message:messaage};
	}	

});	

app.controller('authController', function($rootScope, $scope, $location, $http, $cookies,  $timeout){ 
	
	$scope.signin = function() {
		$rootScope.progress_modal('on', 'Login ...');
		$http({
		  method: 'POST',
		  url: '/api/auth.js',
		  data: {opt:'signin', form_data:$scope.form_auth}
		}).then(function successCallback(response) {
			$rootScope._super.session = response.data;
			$timeout(
				function() {
					$rootScope.progress_modal('off');
				},
				4000
			);
			
		  }, function errorCallback(response) {
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
