/// <reference path="../lib/kendo/2016.1.412/typescript/kendo.all.d.ts" />

module App {
    export class KendoGridController {
        static id = "kendoGridController";
        static $inject = ["$scope"];

        public title: string;
        public selectedItem: string;

        public gridOptions: kendo.ui.GridOptions; // http://docs.telerik.com/kendo-ui/AngularJS/the-grid-widget
        public grid: kendo.ui.Grid;

        constructor(private $scope: angular.IScope) {
            console.log(".ctor KendoGridController", $scope);

            this.title = "Kendo grid";

            this.gridOptions = {
                columns: [
                    { field: "firstName", title: "First Name", width: "150px" },
                    { field: "lastName", title: "Last Name", width: "150px", template: `<a ng-click="vm.showUserDetails('#: lastName #')">#: lastName #</a>` },
                    { field: "country", title: "Country", minScreenWidth: 900 }, 
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
                selectable: "row"
            };
        }

        public handleGridChange(data, dataItem, columns): void {
            console.log("Row selected", data, dataItem, columns);
            this.selectedItem = data.firstName + " " + data.lastName;
        }

        public showUserDetails(e: any): void {
            this.selectedItem = e;
        }

        public refreshGrid(): void {
            this.grid.dataSource.read();
        }
    }
}