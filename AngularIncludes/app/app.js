(function () {
    "use strict";

    angular.module("app", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'app/pages/home/home.html',
            controller: 'homeController'
        }).
        when('/about', {
            templateUrl: 'app/pages/about/about.html',
            controller: 'aboutController'
        })
    });
})();