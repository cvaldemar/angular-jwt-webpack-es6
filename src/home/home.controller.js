export default class HomeController {
	constructor() {
		var vm = this;
		vm.title = 'HomeController';

		vm.hello = 'Hello World';

		activate();

		////////////////
		
		function activate() {
			console.log('HomeController activated');
		}
	}
}
