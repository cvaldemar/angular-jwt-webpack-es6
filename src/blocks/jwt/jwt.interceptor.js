interceptor.$inject = ['$httpProvider', 'jwtInterceptorProvider'];

export default function interceptor($httpProvider, jwtInterceptorProvider) {
	jwtInterceptorProvider.tokenGetter = function() {
		return localStorage.getItem('id_token');
	};

	$httpProvider.interceptors.push('jwtInterceptor');
};
