/**
 * Created by julieanderson on 11/20/16.
 */
(function() {

    angular
        .module('myApp')
        .service('myAppData', myAppData);

    myAppData.$inject = ['$http'];
    function myAppData ($http) {
        var listOfItems = function () {
            return $http.get('/items');
        };
        return {
            listOfItems : listOfItems
        };
    }

})();


