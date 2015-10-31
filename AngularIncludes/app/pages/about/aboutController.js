(function () {
    "use strict";

    angular.module("app")
        .controller('aboutController', AboutController);

    function AboutController() {
        var vm = this;
        vm.message = "I'm the ABOUT controller";
    };
})();