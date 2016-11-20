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
            title: 'This is my App!',
            strapline: 'Bid on stuff and things'
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