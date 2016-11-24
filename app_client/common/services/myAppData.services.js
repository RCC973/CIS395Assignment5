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
         console.log("sending request");
         $http.get('/api/items')
             .success(function (d) {
                 if (d) {
                     return d;
                     console.log(vm.data);
                 }
                 console.log(d);
             });
     };
 }

})();



