/**
 * Created by julieanderson on 11/19/16.
 */
angular.module('myApp',[ngRoute]);

function config ($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.view.html'
        })
        .otherwise({reditectTo: '/'});
}

angular
    .module('myApp')
    .config(['$routePrivider', config]);
