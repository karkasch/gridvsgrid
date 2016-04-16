/// <reference path="../lib/kendo/2016.1.412/typescript/kendo.all.d.ts" />

module App {
    export class KendoGridController {
        static id = "kendoGridController";
        static $inject = ["$scope"];

        public title: string;

        public gridOptions: kendo.ui.GridOptions;

        constructor($scope: angular.IScope) {
            console.log(".ctor KendoGridController", $scope);

            this.title = "Kendo grid";

            this.gridOptions = {
                columns: [
                    {
                        field: "FirstName",
                        title: "First Name",
                        width: "120px"
                    }, {
                            field: "LastName",
                            title: "Last Name",
                            width: "120px"
                        }, {
                            field: "Country",
                            width: "120px"
                        }, {
                            field: "City",
                            width: "120px"
                        }, {
                            field: "Title"
                        }
                ],
                dataSource: {
                    type: "odata",
                    transport: {
                        read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
                    },
                    pageSize: 5,
                    serverPaging: true,
                    serverSorting: true
                },
            };
        }
    }
}