/**
 * Created by julieanderson on 11/19/16.
 */
(function (){
    angular
        .module('myApp')
        .controller('detailCtrl', detailCtrl)

    detailCtrl.$inject = ['$http'];
    function detailCtrl ($http) {
        var vm = this;
        vm.pageHeader = {
            title: 'Detail View!',
            strapline: 'all the details'
        };


        vm.getData = function() {
            console.log("sending request");
            $http.get('/api/items')
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
