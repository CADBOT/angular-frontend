var storeApp = angular.module('storeApp', []);

storeApp.controller('StoreController', StoreController);

/*
 * instead of using $scope we will set the data on the
 * execution context of the contoller instance. It's
 * considered a good practice to alias it to vm for
 * view model (interlude for conceptual discussion about
 * MVC vs MVVM)
 */
function StoreController() {
  var vm = this;
  vm.store = 'Online Product Store';
  vm.productOne = {name: 'iphone 6', cost: 300};
  vm.productTwo = {name: 'soap', cost: 2};
}
