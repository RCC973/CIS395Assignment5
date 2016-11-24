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
        vm.url = "/api/items/" + vm.itemid + "/bids";

        vm.pageHeader = {
            title: ' Place Your Bid!',
            strapline: 'add your item'
        };



    }
})();
