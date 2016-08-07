
app.controller('modalController', function($rootScope, $scope, $location, $http, $cookies){ 

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


	
	$rootScope.progress_modal = function(code, message) {
		$rootScope.Q = {type:'progress_modal',code:code, message:message};
	}
	
	$rootScope.popup = function(code, message) {
		$rootScope.Q = {type:'popup',code:code, message:message};
	}	

});	

