
app.controller('modalController', function($rootScope, $scope, $location, $http, $cookies){ 	
	$scope.Q = {}; 
	$scope.$watch(
		function() {
			var cnt=0;
			var dt = new Date(), tm = dt.getTime();
			
			for (var k in $scope.Q) {
				if (tm > $scope.Q[k].end) {
					console.log(tm+'---'+$scope.Q[k].end+'==>deleted');
					delete $scope.Q[k];
				}
			}				
		
			for (var k in $scope.Q) {
				if (tm < $scope.Q[k].end && tm >= $scope.Q[k].start) {
					cnt++;
				}
			}
			return cnt;
		},
		function(curv, prev) {	
			if (curv) {
				console.log('curv===>');
				console.log(curv);
				$scope.progress_message = '';
				for (var k in $scope.Q) {
					$scope.progress_message += $scope.Q[k].message;
				}				
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
	
	/*
	setInterval(
		function() {
			var dt = new Date(), tm = dt.getTime();
			for (var k in $scope.Q) {
				if (tm > $scope.Q[k].end) {
					console.log(tm+'---'+$scope.Q[k].end+'==>deleted');
					delete $scope.Q[k];
				}
			}		
		},50
	);
	*/
	$rootScope.progress_modal = function(id, code, message, holdtime, maxtime) {
		var t = (!holdtime)?0:holdtime, m = (!maxtime)?10000:maxtime; 
		var dt = new Date(), tm = dt.getTime()
		
		if (code == 'on') $scope.Q[id] = {type:'progress_modal',code:code, message:message, start:tm + t , end: tm + m};
		else delete $scope.Q[id];
		console.log($scope.Q[id]);
	}
	
	$rootScope.popup = function(code, message) {
		$scope.popup(code, message);
	}	

});	

