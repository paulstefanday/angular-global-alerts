var angular = require('angular');
require('angular-flash-alert');
require('angular-animate');
require('./styles.less');
 
var moduleName = 'ErrorCatcher';
 
angular.module(moduleName, ['flash', 'ngAnimate'])
    .factory('errorHttpInterceptor', ['$q', "Flash", function ($q, Flash) {
        return {
            responseError: function responseError(rejection) {

                Flash.create('danger', rejection.data.message ? rejection.data.message : 'An error has occured.', 'customAlert');

                return $q.reject(rejection);
            }
        };
    }])
    .config(['$httpProvider', function($httpProvider) {
        
        $httpProvider.interceptors.push('errorHttpInterceptor');

    }]);

module.exports = moduleName;