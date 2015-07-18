app.controller('HomeCtrl', function($rootScope, $scope, $location, $routeParams, UserService) {

    if ($rootScope.isLoggedIn == true) {
        $scope.user = {
            'fname': '',
            'lname': ''
        }
        var users = UserService.list();
        $scope.users = users;

        $scope.delete = function($index) {
            UserService.delete($index);
        }

        $scope.edit = function($index) {
            $location.path('/edit' + $index);
        }
        $scope.add = function() {
            $location.path('/add');
        }
        $scope.logout = function() {
            $rootScope.isLoggedIn=false;
            $location.path('/');
        }
    } else {
        $location.path('/');
    }
})
