/**
 * Created by julieanderson on 11/19/16.
 */

console.log("In app_client/app.js");
angular.module('myApp',[ngRoute]);

 function config ($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })
        .otherwise({reditectTo: '/'});
}

angular
    .module('myApp')
    .config(['$routeProvider', config]);
