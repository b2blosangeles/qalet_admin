var app = angular.module('qaletApp', [
  'ngCookies',
  'ngRoute'
]);
app.controller('homepageController', function($rootScope, $scope, $window, $http, $compile, $timeout, $cookies){ 


		$scope.maxsize = {
			"myFavorite":{max_size:4, item_class:'col-lg-3 col-md-3 col-sm-6 col-xs-6', box_class:'col-lg-12 col-md-12 col-sm-12'},
			"currentHot":{max_size:2, item_class:'col-lg-6 col-md-6 col-sm-6 col-xs-6', box_class:'col-lg-12 col-md-12 col-sm-12'},
			"recentEvents":{max_size:6, item_class:'col-lg-6 col-md-6 col-sm-6 col-xs-12', box_class:'col-lg-12 col-md-12 col-sm-12'}			
		}		


});
