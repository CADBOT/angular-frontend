var storeApp = angular.module('storeApp', []);

storeApp.controller('StoreController', StoreController);

/*
 * Usually instead of all of our data being hardcoded into a controller, we 
 * woudl be grabbing it from a backend web server. As angular is a SPA where
 * the templates aren't rendered by the server like in a more traditional app,
 * we must grab this data using an AJAX request (interlude to the whiteboard to
 * draw up the architecture. Show students how to run the server locally or connect
 * to the backup one running on digital ocean
 *
 * Instead of using jquery to do our AJAX request, we will use angulars built-in
 * $http service.
 */
function StoreController($http) {
  var vm = this;
  vm.store = 'Online Product Store';
  vm.products = [];
  
  activate();

  /*
   * It's considered a good practice to put all controller startup logic in an activate function.
   * This is useful because it puts all that logic on one place, instead of spreading it about the 
   * controller at random. It is also nice as it allows you to quickly zerio in on the activation
   * logic for any controller
   */
  function activate() {
    $http.get('http://localhost:3000/products').success(function(data) {
      vm.products = data;
    }).catch(function(info) {
     // Catch enables us to handle errors that may occur, such as the server not being up
     // (demonstrate how this runs if the server is down
     console.log(info); 
    }).finally(function() {
      // finally will get called after success or catch. Useful for perfoming cleanup operations
      console.log('From finally: I always run');
    })
  }
}
