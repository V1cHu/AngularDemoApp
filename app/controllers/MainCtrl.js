app.controller('MainCtrl', function($rootScope, $scope, $location, UserService) {

    $scope.information = '';
    $scope.login = function(user) {
        if (!(user == undefined || user.name == undefined || user.password == undefined)) {
            var status = UserService.login(user);
            if ('Success' === status) {
                $rootScope.isLoggedIn = true;
                $location.path('/home');
            } else {
                $scope.information = "Username/Password is invalid!"
            }
        }
    }
});
