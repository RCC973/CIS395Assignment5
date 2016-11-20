/**
 * Created by julieanderson on 11/19/16.
 */
(function (){
    angular
        .module('myApp')
        .controller('homeCtrl', homeCtrl);



    function homeCtrl () {
        var vm = this;
        vm.pageHeader = {
            title: 'This is my App!',
            strapline: 'Bid on stuff and things'
        };
        vm.sidebar = {
            content: "Here is the sidebar"
        };
        vm.data = {
            items:[{
            name: "item1",
            description: "A weird thing",
            startingPrice: 12.00
        },{
            name: "item2",
            description: "Another weird thing",
            startingPrice: 24.00
        }]}


    }
})();