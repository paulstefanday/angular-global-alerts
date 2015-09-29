var angular = require('angular');
require('angular-flash-alert');
require('angular-animate');
require('./styles.less'); 

var moduleName = 'angular-global-alerts';

module.exports = function(style, redirect) {


    angular.module(moduleName, ['flash', 'ngAnimate'])
        .factory('errorHttpInterceptor', ['$q', "Flash", "$location", function ($q, Flash, $location) {
            return {
                responseError: function responseError(rejection) {
                    // clean error message
                    if(rejection.data.message.length > 200) rejection.data.message = 'An error has occured.';

                    // create alert
                    Flash.create('danger', rejection.data.message ? rejection.data.message : 'An error has occured.', style ? style : 'customAlert');

                    // redirect back to redirect page
                    $location.path(redirect ? redirect : '/');

                    // return error
                    return $q.reject(rejection);
                }
            };
        }])
        .config(['$httpProvider', function($httpProvider) {
            
            $httpProvider.interceptors.push('errorHttpInterceptor');

        }]);

        return moduleName;

}
