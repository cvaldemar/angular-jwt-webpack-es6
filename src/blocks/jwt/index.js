import angularjwt from 'angular-jwt';
import interceptor from './jwt.interceptor';

export default angular.module('app.blocks.jwt', [
		angularjwt
	])
	.config(interceptor)
	.name;
