/// <reference path="../lib/kendo/2016.1.412/typescript/kendo.all.d.ts" />

module App {
    export class KendoGridController {
        static id = "kendoGridController";
        static $inject = ["$scope"];

        public title: string;
        public selectedItem: string;

        public gridOptions: kendo.ui.GridOptions;

        constructor($scope: angular.IScope) {
            console.log(".ctor KendoGridController", $scope);

            this.title = "Kendo grid";

            this.gridOptions = {
                columns: [
                    { field: "firstName", title: "First Name", width: 120 },
                    { field: "lastName", title: "Last Name", template: `<a ng-click="vm.showUserDetails('#: lastName #')">#: lastName #</a>` },
                    { field: "country", title: "Country", width: "120px", minScreenWidth: 900 },
                    { field: "age", title: "Age", width: 90, minScreenWidth: 800 },
                    { field: "createdUtc", title: "Date created" }
                ],
                dataSource: {
                    //type: "odata",
                    transport: {
                        read: "/api/users"
                    },
                    pageSize: 50,
                    serverPaging: true,
                    serverSorting: true,
                    serverFiltering: true,
                    schema: {
                        data: "data",
                        total: "totalResults"
                    }
                },
                columnMenu: true,
                height: 500,
                sortable: true,
                //pageable: true,
                scrollable: {
                    virtual: true
                },
                change: function (e) {
                    console.log("grid:change ", e, this);
                    var selectedRows = this.select();
                    var selectedDataItems = [];
                    for (var i = 0; i < selectedRows.length; i++) {
                        var dataItem = this.dataItem(selectedRows[i]);
                        selectedDataItems.push(dataItem);
                    }
                }
            };
        }

        public showUserDetails(e: any): void {
            this.selectedItem = e;
        }
    }
}