routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider

		.state('auth', {
			abstract: true,
			url: '/auth/',
			template: '<ui-view/>'
		})

		.state('auth.login', {
			url: 'login/',
			template: require('./login.html'),
			controller: 'LoginController',
			controllerAs: 'vm'
		})

		.state('auth.register', {
			url: 'register/',
			template: require('./register.html'),
			controller: 'RegisterController',
			controllerAs: 'vm'
		});

}
