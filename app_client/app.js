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

   /* var myAppData = function(){
        return [{
                    name: "item1",
                    description: "A weird thing",
                    startingPrice: 12.00
                },{
                    name: "item2",
                    description: "Another weird thing",
                    startingPrice: 24.00
                }];
    };
    */
   var myAppData = function($http){
       return $http.get('/api/items');
   }


    angular
        .module('myApp')
        .config(['$routeProvider', config])
        .service('myAppData', myAppData);



})();