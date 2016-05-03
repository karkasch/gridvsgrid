module App {
    export class ApiService {
        static id = "apiService";
        static $inject = ["$http", "$q"];

        constructor(private $http: angular.IHttpService, private $q: angular.IQService) {
        }

        public getUsers(take: number, skip: number): angular.IPromise<any> {

            var defer = this.$q.defer();

            var def = this.$http({
                method: "GET",
                url: "/api/users?take=" + take + "&skip=" + skip
            }).then((response) => {
                defer.resolve(response);
            }).catch((response) => {
                defer.reject(response);
            });

            return defer.promise;
        }
    }
}