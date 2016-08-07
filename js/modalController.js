
app.controller('modalController', function($rootScope, $scope, $location, $http, $cookies){ 	
	$scope.Q = {}; // handle multiple to do
	$scope.$watch(
		function() {
			var cnt;
			for (k in $scope.Q) {
				if (new Date().getTime() > $scope.Q[k].end) {
					delete $scope.Q[k];
				}
			}			
			for (k in $scope.Q) {
				if (new Date().getTime() < $scope.Q[k].end && new Date().getTime() > $scope.Q[k].start) {
					cnt++;
				}
			}
			return cnt;
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
	
	
	$rootScope.progress_modal = function(id, code, message, holdtime, maxtime) {
		var t = (!holdtime)?0:holdtime, m = (!maxtime)?6000:maxtime;
		if (code == 'on') $scope.Q[id] = {type:'progress_modal',code:code, message:message, start:new Date().getTime() + t , end: new Date().getTime() + m};
		else delete $scope.Q[id];
	}
	
	$rootScope.popup = function(code, message) {
		$scope.popup(code, message);
	}	

});	

