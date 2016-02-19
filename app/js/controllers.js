/*
 * We already created our angular module Store app, the []'s are
 * we inject any deps our app needs (more on this later) as we
 * aren't currently using any we leave the array empty
 */ 
var storeApp = angular.module('storeApp', []);

/*
 * Inside our app we will create a controller. This controller is
 * how we will use javascript to initilize data for our app. The
 * first paramater is the name of the controller, and will be used
 * by the ng-controller directive to create a new instance of this
 * controller. The second paramter is a constructor function for
 * the controller
 *
 */
storeApp.controller('StoreController', StoreController);

/*
 * It's considered good practice to create a named constructor
 * function instead of using an anony function. This makes it more
 * clear that this is in fact a constructor functino, and we will be
 * getting new instances of it each time we bring it in with a directive
 * (later, we'll discuss how this creates multiple stand alone scopes)
 */
function StoreController($scope) {
  $scope.store = 'Online Product Store';
  $scope.productOne = {name: 'iphone 6', cost: 300};
  $scope.productTwo = {name: 'soap', cost: 2};
}
/*
 * This $scope is an intermediar layer between the template
 * and the controller. It's what allows them to both access
 * the same state.
 */
