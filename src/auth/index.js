import routes from './auth.routes';
import authFormsService from './auth.forms';
import authService from './auth.service';
import LoginController from './authlogin.controller';
import RegisterController from './authregister.controller';

export default angular.module('app.auth', [])
	.config(routes)
	.service('authFormsService', authFormsService)
	.service('authService', authService)
	.controller('LoginController', LoginController)
	.controller('RegisterController', RegisterController)
	.name;
