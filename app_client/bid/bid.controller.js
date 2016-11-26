/**
 * Created by julieanderson on 11/23/16.
 */

(function (){
    angular
        .module('myApp')
        .controller('bidCtrl', bidCtrl);

    bidCtrl.$inject = ['$http', '$routeParams'];
    function bidCtrl ($http, $routeParams) {
        var vm = this;
        vm.itemid = $routeParams.itemId;

        vm.getData = function() {
            console.log("sending request");
            $http.get('/api/items/'+ vm.itemid)
                .success(function (d) {
                    if (d) {
                        vm.data = d;
                        console.log(vm.data);
                        vm.getLargest();

                    }
                    console.log(d);

                });
        };

        vm.getData();

        vm.getLargest= function() {
            vm.largest = 0;

            for (x = 0; x < vm.data[0].bids.length; x++) {
                if (vm.data[0].bids[x].price > vm.largest) {
                    vm.largest = vm.data[0].bids[x].price
                }
            }

        };


        vm.pageHeader = {
            title: ' Place Your Bid!',
            strapline: 'add your item'
        };
        vm.onSubmit = function(){
            console.log("you clicked submit");
            console.log(vm.formData);
            $http.post("/api/items/" + vm.itemid + "/bids", vm.formData);
            vm.message = "Your Bid was added!";

        };


    }
})();
