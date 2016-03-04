export default class authFormsService {

	login() {
		return [
			{
				key: 'email',
				type: 'input',
				templateOptions: {
					required: true,
					label: 'Email'
				}
			},
			{
				key: 'password',
				type: 'input',
				templateOptions: {
					required: true,
					label: 'Password'
				}
			}
		]
	}

	register() {
		return [
			{
				key: 'name',
				type: 'input',
				templateOptions: {
					required: true,
					label: 'Name'
				}
			},
			{
				key: 'email',
				type: 'input',
				templateOptions: {
					required: true,
					label: 'Email'
				}
			},
			{
				key: 'password',
				type: 'input',
				templateOptions: {
					required: true,
					label: 'Password'
				}
			}
		]
	}

}