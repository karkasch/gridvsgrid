/// <reference path="../lib/definitelytyped/angularjs/angular.d.ts" />
/// <reference path="../lib/definitelytyped/angularjs/angular-route.d.ts" />

module App {
    class Config {
        static $inject = ["$routeProvider"];

        constructor($routeProvider: angular.route.IRouteProvider) {
            $routeProvider.when("/",
                {
                    templateUrl: "./wwwroot/app1/index.html",
                    controller: IndexController.id,
                    controllerAs: "vm"
                });
        }
    }

    angular.module("app", ["ngRoute"])
        .controller(IndexController.id, IndexController)
        .config(Config);
}

