/// <reference path="../lib/definitelytyped/angularjs/angular.d.ts" />
/// <reference path="../lib/definitelytyped/angularjs/angular-route.d.ts" />

module App {
    class Config {
        static $inject = ["$routeProvider"];

        constructor($routeProvider: angular.route.IRouteProvider) {
            $routeProvider.when("/",
                {
                    name: "index",
                    templateUrl: "./wwwroot/app1/index.html",
                    controller: IndexController.id,
                    controllerAs: "vm"
                })
                .when("/kendo-grid",
                {
                    name: "kendogrid",
                    templateUrl: "./wwwroot/app1/kendo-grid.html",
                    controller: KendoGridController.id,
                    controllerAs: "vm"
                })
                .when("/angular-grid",
                {
                    name: "angulargrid",
                    templateUrl: "./wwwroot/app1/angular-grid.html",
                    controller: AngularGridController.id,
                    controllerAs: "vm"
                });
        } 
    }

    angular.module("app", ["ngRoute", "kendo.directives", "ui.grid"])
        .service(ApiService.id, ApiService)
        .controller(IndexController.id, IndexController)
        .controller(KendoGridController.id, KendoGridController)
        .controller(AngularGridController.id, AngularGridController)
        .config(Config);
}

