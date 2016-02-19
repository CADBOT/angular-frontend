var storeApp = angular.module('storeApp', []);

storeApp.controller('StoreController', StoreController);
storeApp.controller('ProductController', ProductController);

function StoreController($http) {
  var vm = this;
  vm.store = 'Online Product Store';
  vm.products = [];
  
  activate();

  function activate() {
    $http.get('http://localhost:3000/products').success(function(data) {
      vm.products = data;
    }).catch(function(info) {
     console.log(info); 
    }).finally(function() {
      // finally will get called after success or catch. Useful for perfoming cleanup operations
      console.log('From finally: I always run');
    })
  }
}

function ProductController($http) {
  var vm = this;
  vm.name = '';
  vm.cost = '';
  vm.errorMessage = '';
  vm.submit = function() {
    if (validate()) {
      console.log('submitted');
      var data = JSON.stringify({name: vm.name, cost: vm.cost});
      $http.post('http://localhost:3000/products', data).success(function(data) {
        console.log(data);
      });
    }
    else {
      console.log('invalid');
    }
  };

  function validate() {
    if (vm.name == '' || !vm.name) {
      vm.errorMessage = 'name must be present';
      return false;
    }
    if (vm.cost == '' || !vm.cost) {
      vm.errorMessage = 'cost must be present';
      return false;
    }
    vm.errorMessage = '';
    return true;
  }
}
