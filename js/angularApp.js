var app = angular.module('gamerStack', ['ui.router']);

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Login Controller Function
function loginController($scope) {
    $scope.username = "";
    $scope.password = "";
    $scope.gamerLogin =  function() {
        //login to be implemented
    }
}
app.controller('loginController', ['$scope',loginController]); //Define c

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//Routing is done here
function mainRouter($stateProvider, $urlRouterProvider) {
    //Login page
    $stateProvider.state('login', {
                                    url: '/login',
                                    templateUrl: '/login.php',
                                    controller: 'loginController'
                                });
    $urlRouterProvider.otherwise('login');
}
app.config(['$stateProvider', '$urlRouterProvider', mainRouter]); //Configure router service