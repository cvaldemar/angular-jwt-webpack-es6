export default class LoginController {
	static $inject = ['$scope', '$state', 'authFormsService', 'authService', 'jwtHelper'];

	constructor($scope, $state, authFormsService, authService, jwtHelper) {
		var vm = this;
		vm.title = 'LoginController';

		vm.login = login;

		activate();

		////////////////

		function activate() {
			vm.fields = authFormsService.login();
			console.log('LoginController activated');
		}

		function login() {
			authService.postLogin(vm.data).then(function(d) {
				localStorage.setItem('id_token', d.data.token);
				console.log(jwtHelper.decodeToken(d.data.token));
				$state.go('home');
			});
		}
	}
}
