(function() {
	'use strict';

	var app = angular.module('App');

	app.directive('item', function() {
		return {
			require: '^item',
			restrict: 'A',
			templateUrl: 'item.html'
		};
	});

	app.directive('itemDetails', function() {
		return {
			require: '^item',
			restrict: 'A',
			templateUrl: 'item-details.html'
		};
	});

	app.directive('list', function() {
		return {
			restrict: 'E',
			templateUrl: 'list.html',
			controller: 'ListController',
			controllerAs: 'list'
		};
	});

	app.directive('result', function() {
		return {
			restrict: 'E',
			templateUrl: 'message.html'
		};
	});
})();