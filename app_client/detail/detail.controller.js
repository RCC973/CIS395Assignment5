/**
 * Created by julieanderson on 11/19/16.
 */
(function (){
    angular
        .module('myApp')
        .controller('detailCtrl', detailCtrl);

    detailCtrl.$inject = ['$http','$routeParams'];
    function detailCtrl ($http, $routeParams) {
        var vm = this;
        vm.itemId = $routeParams.itemId;
        vm.pageHeader = {
            title: "Detail View",
            strapline: 'all the details'
        };

        vm.getData = function() {
            console.log("sending request");
            $http.get('/api/items/'+ vm.itemId)
                .success(function (d) {
                    if (d) {
                        vm.data = d;
                        console.log(vm.data);
                    }
                    console.log(d);
                });
        };

        vm.getData();

        console.log("got data");

    }
})();
