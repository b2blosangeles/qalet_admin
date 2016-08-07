
app.controller('modalController', function($rootScope, $scope, $location, $http, $cookies){ 
	
	$scope.Q = {}; // handle multiple to do

	$scope.$watch(
		function() {
			return $rootScope.Q.type;
		},
		function(curv, prev) {	
			if (curv) {
				if (curv == 'progress_modal') {
					$scope.progress_modal($rootScope.Q.code, $rootScope.Q.message, $rootScope.Q.holdtime);
				}
				if (curv == 'popup') {
					$scope.popup($rootScope.Q.code, $rootScope.Q.message);
				}	
				$rootScope.Q = {};
			}
		}
	);	
// $('#modal.in').length > 0;
	$scope.progress_modal = function(code, message, holdtime) {
	//	console.log('holdtime==>');
	//	console.log(holdtime);
		
		$scope.progress_message = message;	
		if (code == 'on') {
			$('.qalet_loading_progress_bar').modal();
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
	
	
	$rootScope.progress_modal = function(id, code, message, holdtime) {
		$rootScope.Q = {type:'progress_modal',code:code, message:message, holdtime:holdtime, id:id};
	}
	
	$rootScope.popup = function(code, message) {
		$rootScope.Q = {type:'popup',code:code, message:message};
	}	

});	

