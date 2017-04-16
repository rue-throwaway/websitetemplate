angular
    .module('myApp', ['ngRoute'])
    .config(['$routeProvider', config])

function config($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'indexhome.html',
        controller: 'myController',
        controllerAs: 'vm'
    })
        .when('/food', {
            templateUrl: "food.html",
            controller: 'food',
            controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/'});
}