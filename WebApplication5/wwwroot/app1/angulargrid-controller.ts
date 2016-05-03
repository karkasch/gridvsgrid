
module App {
    export class AngularGridController {
        static id = "angGridController";
        static $inject = ["$scope", ApiService.id];

        public title: string;
        public gridOptions: any;

        constructor(private $scope: angular.IScope, private apiService: ApiService) {
            console.log(".ctor AngularGridController", $scope);

            this.title = "Angular grid";

            this.gridOptions = {
                infiniteScrollRowsFromEnd: 50,
                infiniteScrollUp: true,
                infiniteScrollDown: true,
                //enablePaginationControls: false,
                //paginationPageSize: 50,
                columnDefs: [
                    { name: 'firstName' },
                    { name: 'lastName' },
                    { name: 'country' }
                ],
                data: "data"
            };

            this.apiService.getUsers(50, 0).then((response) => {
                this.gridOptions.data = response.data;
            });
        }
    }
}