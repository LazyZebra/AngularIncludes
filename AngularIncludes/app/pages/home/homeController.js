(function () {
    "use strict";

    angular.module("app")
        .controller('homeController', HomeController);

    function HomeController() {
        var vm = this;
        vm.message = "I'm the HOME controller";
    };
})();