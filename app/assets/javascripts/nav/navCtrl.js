angular.module('flapperNews')
.controller('NavCtrl', [
'$scope',
'Auth',
function($scope, Auth){
  var user = {
      email: 'user@domain.com',
      password: 'password1'
  };
  var config = {
      headers: {
          'X-HTTP-Method-Override': 'POST'
      }
  };

  Auth.currentUser().then(function(user){
    $scope.user = user;
  })

  $scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
  });
}])
