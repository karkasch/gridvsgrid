
module App {
    export class AngularGridController {
        static id = "angGridController";
        static $inject = ["$scope", ApiService.id];

        public title: string;

        public gridOptions: any;
        public gridApi: any;
        public gridData: any;
        public getFirstData: Function;
        public getDataDown: Function;
        public getDataUp: Function;

        constructor(private $scope: angular.IScope, private apiService: ApiService) {
            console.log(".ctor AngularGridController", $scope);

            this.title = "Angular grid";

            this.gridData = [];

            this.getFirstData = () => {
                this.apiService.getUsers(50, 0).then((response) => {
                    this.gridData = this.gridData.concat(response.data);
                });
            }

            this.getDataDown = () => {
                console.log("getDataDown");
            }

            this.getDataUp = () => {
                console.log("getDataUp");
            }

            this.gridOptions = {
                infiniteScrollRowsFromEnd: 50,
                //infiniteScrollUp: true,
                infiniteScrollDown: true,
                //enablePaginationControls: false,
                //paginationPageSize: 50,
                columnDefs: [
                    { name: 'firstName' },
                    { name: 'lastName' },
                    { name: 'country' }
                ],
                data: "gridData",
                onRegisterApi: (gridApi) => {
                    gridApi.infiniteScroll.on.needLoadMoreData($scope, this.getDataDown);
                    gridApi.infiniteScroll.on.needLoadMoreDataTop($scope, this.getDataUp);
                    this.gridApi = gridApi;
                }   
            };
            

            //this.apiService.getUsers(50, 0).then((response) => {
            //    this.gridOptions.data = response.data;
            //});
        }

        

        
    }
}