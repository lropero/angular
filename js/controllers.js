(function() {
	'use strict';

	var app = angular.module('App');

	app.controller('ListController', ['DataFactory', function(DataFactory) {
		var self = this;

		DataFactory.getData(function(data) {
			self.items = data;
		});
	}]);

	app.controller('ItemController', function() {
		this.expand = function(state, index) {
			if(state !== 'Pending' && state !== 'Running') {
				if(this.current === index) {
					this.current = null;
				} else {
					this.current = index;
				}
			}
		};

		this.view = function(index, button) {
			alert('You clicked on row ' + (index + 1) + ', button ' + button + '.');
		};
	});
})();