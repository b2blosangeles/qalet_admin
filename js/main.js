var app = angular.module('qaletApp', [
  'ngRoute',
  'ngCookies'
]);


app.controller('mainController', function($rootScope, $scope, $window, $http, $compile, $timeout, $cookies){ 

	$scope.niu='1212';

});
