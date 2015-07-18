app.controller('AddCtrl', function($rootScope, $scope, $location, $routeParams, UserService) {

    if ($rootScope.isLoggedIn == true) {
        var user = {
            'fname': $scope.fname,
            'lname': $scope.lname,
        }

        $scope.cancel = function() {
            $rootScope.isLoggedIn = true;
            $location.path('/home');
        }

        $scope.add = function(user) {
            if (user.fname != 'undefined' && user.lname != 'undefined' &&
                user.fname != '' && user.lname != '') {
                UserService.add(user);
                $rootScope.isLoggedIn = true;
                $location.path('/home');
            }
        }
    } else {
        $location.path('/');
    }

})
