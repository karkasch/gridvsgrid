module App {
    export class IndexController {
        static id = "indexController";
        static $inject = ["$scope"];

        public title: string;

        constructor($scope: angular.IScope) {
            console.log(".ctor IndexController", $scope);

            this.title = "Indexxx";
        }
    }
}