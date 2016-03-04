import 'bootstrap/dist/css/bootstrap.css';

import uirouter from 'angular-ui-router';
import formly from 'angular-formly';
import formlybootstrap from 'angular-formly-templates-bootstrap';
import angularjwt from 'angular-jwt';

import routes from './core.routes';

export default angular.module('app.core',[
		uirouter, formly, formlybootstrap, angularjwt
	])
	.config(routes)
	.name;
