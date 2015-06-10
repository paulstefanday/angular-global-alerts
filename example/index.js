import angular from 'angular';

angular
	.module('app', [ require('angular-global-alerts') ])
	
	.run(['$rootScope', '$http', function($rootScope, $http){

		$rootScope.showError = function() {
			$http.get('/deadroute');
		}

	}])
