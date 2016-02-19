var storeApp = angular.module('storeApp', []);

storeApp.controller('StoreController', StoreController);

/*
 * Move the data from two objects one one array
 */
function StoreController() {
  var vm = this;
  vm.store = 'Online Product Store';
  vm.products = [
    {name: 'iphone 6', cost: 300}, 
    {name: 'soap', cost: 2},
    {name: 'juice', cost: 5},
    {name: 'batteries', cost: 5}
  ];
}
