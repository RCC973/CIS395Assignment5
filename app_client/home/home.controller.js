/**
 * Created by julieanderson on 11/19/16.
 */
(function (){
    angular
        .module('myApp')
        .controller('homeCtrl', homeCtrl)

    homeCtrl.$inject = ['$http'];
    function homeCtrl ($http) {
        var vm = this;
        vm.pageHeader = {
            title: 'Welcome to BidNow!',
            strapline: 'Bid on stuff and things'
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