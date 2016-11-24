/**
 * Created by julieanderson on 11/23/16.
 */

(function (){
    angular
        .module('myApp')
        .controller('bidCtrl', bidCtrl)

    bidCtrl.$inject = ['$http'];
    function bidCtrl ($http) {
        var vm = this;
        vm.pageHeader = {
            title: ' Place Your Bid!',
            strapline: 'add your item'
        };


    }
})();
