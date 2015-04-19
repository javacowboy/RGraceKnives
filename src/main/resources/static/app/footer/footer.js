;(function(){
	'use strict';
	angular.module('rg.footer', [])
	/**
	 * HTML: <rg-footer></rg-footer>
	 */
	.directive('rgFooter', [function() {
		return {
			restrict: 'EA',
			templateUrl: '/app/footer/footer.html',
		};
	}]);
})();