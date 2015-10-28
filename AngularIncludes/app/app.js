(function () {

    var app = angular.module("app", []);

    var mainController = function ($scope) {
        $scope.message = "Main Controller";
    };

    app.controller("mainController", mainController);

})();