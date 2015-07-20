(function() {
	'use strict';

	var app = angular.module('App');

	app.factory('DataFactory', ['$http', function($http) {
		var dataFactory = {};

		dataFactory.getData = function(callback) {
			$http.get('data.json').success(callback).error(function(error) { console.log(error); });
		};

		return dataFactory;
	}]);
})();