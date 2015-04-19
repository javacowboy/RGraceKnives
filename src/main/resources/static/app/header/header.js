;(function(){
	'use strict';
	angular.module('rg.header', ['ui.router'])
	/**
	 * HTML: <rg-navigation></rg-navigation>
	 */
	.directive('rgNavigation', [function() {
		return {
			restrict: 'EA',
			templateUrl: '/app/header/header.html',
		};
	}])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: '/app/home/home.html'
		});
		$stateProvider.state('contact', {
			url: '/contact',
			templateUrl: '/app/contact/contact.html'
		});
		$stateProvider.state('about', {
			url: '/about',
			templateUrl: '/app/about/about.html'
		});
	}]);
})();