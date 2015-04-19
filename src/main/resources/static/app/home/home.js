;(function(){
	'use strict';
	angular.module('rgraceApp')
	.controller('rgHomeController', ['$scope', function($scope) {
		$scope.transitionInterval = 5000;
		$scope.slides = [
		     {
		    	 image: '/content/photos/knife01.jpg',
		    	 title: 'G-2 Drop Point',
		    	 text: 'Shown with micarta.'
		     },
		     {
		    	 image: '/content/photos/knife02.jpg',
		    	 title: 'G-5 Skinner',
		    	 text: 'Shown with bone handle and brass bolster.'
		     },
		     {
		    	 image: '/content/photos/knife03.jpg',
		    	 title: 'G-10',
		    	 text: 'Our most popular all-around knife.'
		     },
		                 
		];
//		$scope.addSlide = function() {
//			var newWidth = 600 + slides.length + 1;
//		    slides.push({
//		      image: 'http://placekitten.com/' + newWidth + '/300',
//		      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
//		        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
//		    });
//		  };
//		  for (var i=0; i<4; i++) {
//		    $scope.addSlide();
//		  }
	}]);
})();