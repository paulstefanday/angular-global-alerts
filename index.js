import angular from 'angular';
import flash from 'angular-flash-alert';
import ngAnimate from 'angular-animate';
import './styles.less';
 
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

export default moduleName;