/**
 * Created by julieanderson on 11/20/16.
 */
(function() {


 angular
 .module('myApp')
 .service('myAppData', myAppData);

 myAppData.$inject = ['$http'];
 function myAppData ($http) {
        var items = function () {
            console.log("sending request from service");
            return $http.get('/api/items');
        };
        return {
            items : items
        };
    }

})();



