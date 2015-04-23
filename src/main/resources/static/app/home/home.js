;(function(){
	'use strict';
	angular.module('rgraceApp')
	.controller('rgHomeController', ['$scope', function($scope) {
		$scope.transitionInterval = 5000;
		$scope.slides = [
		     {
		    	 image: '/content/photos/knife1.jpg',
		    	 title: 'G-2 Drop Point',
		    	 text: 'Shown with micarta.'
		     },
		     {
		    	 image: '/content/photos/knife2.jpg',
		    	 title: 'G-5 Skinner',
		    	 text: 'Shown with bone handle and brass bolster.'
		     },
		     {
		    	 image: '/content/photos/knife3.jpg',
		    	 title: 'G-10',
		    	 text: 'Our most popular all-around knife.'
		     },
		     {
		    	 image: '/content/photos/knife4.jpg'
		     },
		     {
		    	 image: '/content/photos/knife5.jpg'
		     },
		     {
		    	 image: '/content/photos/knife6.jpg'
		     }
		                 
		];
	}]);
})();