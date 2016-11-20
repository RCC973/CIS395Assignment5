/**
 * Created by julieanderson on 11/19/16.
 */
(function (){
    angular
        .module('myApp')
        .controller('addCtrl', addCtrl)

    addCtrl.$inject = ['$http'];
    function addCtrl ($http) {
        var vm = this;
        vm.pageHeader = {
            title: 'Add Item!',
            strapline: 'add your item'
        };
        vm.sidebar = {
            content: "Here is the sidebar"
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
