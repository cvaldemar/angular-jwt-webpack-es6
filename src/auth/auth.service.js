export default class authService {
    static $inject = ['$http', '$q'];

	constructor($http, $q) {

		var service = {
			postLogin: postLogin
		}
		return service;

		////////////////

		function postLogin(data) {
			return $http.post('http://localhost:8000/api/login', data).catch(function() {
				return $q.reject();
			})
		}

	}
}
