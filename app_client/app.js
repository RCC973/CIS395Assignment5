/**
 * Created by julieanderson on 11/19/16.
 */


(function () {

    angular.module('myApp', ['ngRoute']);

    function config ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});
    }

    angular
        .module('myApp')
        .config(['$routeProvider', config]);

})();