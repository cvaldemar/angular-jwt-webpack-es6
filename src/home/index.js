import routes from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home', [])
	.config(routes)
	.controller('HomeController', HomeController)
	.name;
