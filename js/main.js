var app = angular.module('qaletApp', [
	'ngCookies',
	'ngRoute'
]);
app.controller('mainController', function($rootScope, $scope, $location, $http, $cookies, $timeout){ 
	
	$rootScope._super={}
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
			$rootScope.progress_modal('off')
		  }, function errorCallback(response) {
			console.log(response);
			$rootScope.progress_modal('off');		
			$rootScope.popup('on');
		});
	};

	
});


app.controller('modalController', function($rootScope, $scope, $location, $http, $cookies){ 
	
	$scope.$watch(
		function() {
			var r = {};
			for (var key in $rootScope.Q) {
				if (new Date().getTime() - $rootScope.Q[key].stm > 0); {
					if (!r.stm || r.stm > $rootScope.Q[key].stm) {
						r = $rootScope.Q[key];
					}
				}
			}
			return r;
		},
		function(curv, prev) {	
			if (curv) {
			//	$scope.popup = {
			//		caption:new Date()
			//	}
			}
		}
	);	
	/*
	var _ITV = setInterval(
		function() {
			for (var key in $rootScope.Q) {
				if (new Date().getTime() - $rootScope.Q[key].etm > 0 ); {
					delete  $rootScope.Q[key];
				}
			}
		}, 2000
	)
	*/
	$rootScope.addModalQ = function(id, data, holdtime, lifetime) {
		if (!id) return false;
		$rootScope.Q[id] = {
			data:data, stm:new Date().getTime() + holdtime, etm:new Date().getTime() + lifetime
		};
	}	
	$rootScope.deleteModalQ = function(id) {
		if (!id) return false;
		delete $rootScope.Q[id];
	}	
	
	
	$rootScope.progress_modal = function(code) {
		
	//	$rootScope.addModalQ('id', 'data', 1000, 3000)
		
		
		if (code == 'on') {
			$('.qalet_loading_progress_bar').modal();
		} else {
			$('.qalet_loading_progress_bar').modal('hide');
		}
	}
	
	$rootScope.popup = function(code) {
		if (code == 'on') {
			$('.qalet_popup').modal();
		} else {
			$('.qalet_popup').modal('hide');
		}
	}	

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
			/*
			setTimeout(
				function() {
					$rootScope.progress_modal('off');
				},
				50000
			);
			*/
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
