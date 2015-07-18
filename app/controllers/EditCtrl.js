app.controller('EditCtrl', function($rootScope, $scope, $location, $routeParams, UserService) {

    if ($rootScope.isLoggedIn == true) {
        var users = UserService.list();
        var index = $routeParams.param;

        var user = {
            'fname': users[index].fname,
            'lname': users[index].lname,
        };
        $scope.user = user;

        $scope.cancel = function() {
            $rootScope.isLoggedIn = true;
            $location.path('/home');
        }

        $scope.save = function(user) {
            if (user.fname != 'undefined' && user.lname != 'undefined' &&
                user.fname != '' && user.lname != '') {
                UserService.save(user, index);
                $rootScope.isLoggedIn = true;
                $location.path('/home');
            }
        }
    } else {
        $location.path('/');
    }

})
