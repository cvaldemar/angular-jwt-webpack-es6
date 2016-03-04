export default class RegisterController {
	static $inject = ['$scope', 'authFormsService'];

	constructor($state, authFormsService) {
		var vm = this;
		vm.title = 'RegisterController';

		activate();

		////////////////

		function activate() {
			vm.fields = vm.fields = authFormsService.register();
		}

		function register() {
			console.log('signing up user');
		}
	}
}
