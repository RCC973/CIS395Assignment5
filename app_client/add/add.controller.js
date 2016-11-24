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


    }
})();
