/**
 * Created by julieanderson on 11/19/16.
 */
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
}