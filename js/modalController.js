
app.controller('modalController', function($rootScope, $scope, $location, $http, $cookies){ 
	
	$scope.Q = {}; // handle multiple to do

	$scope.$watch(
		function() {
			return Object.keys($scope.Q).length;
		},
		function(curv, prev) {	
			if (curv) {
				var o = $scope.Q[Object.keys($scope.Q)[0]];
				$scope.progress_message = o.message;
				console.log(o);
				$('.qalet_loading_progress_bar').modal();
			} else {
				$('.qalet_loading_progress_bar').modal('hide');
			}
		}
	);	
	$scope.popup = function(code, message) {
		$scope.popup_message = message;
		if (code == 'on') {
			$('.qalet_popup').modal();
		} else {
			$('.qalet_popup').modal('hide');
		}
	}	
	
	
	$rootScope.progress_modal = function(id, code, message, holdtime) {
		if (code == 'on') $scope.Q[id] = {type:'progress_modal',code:code, message:message, holdtime:holdtime, id:id};
		else delete $scope.Q[id];
	}
	
	$rootScope.popup = function(code, message) {
		$scope.popup(code, message);
	}	

});	

