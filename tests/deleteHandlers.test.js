// eslint-disable-next-line no-undef
const config = require('../config')

test('Returns a 200 code', async () => {
	let actualStatuscode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatuscode = response.status
	} catch (error) {
		console.error(error);
	}
});


test('Returns a 200 code', async () => {
	let actualStatuscode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/3`, {
			method: 'DELETE',
		});
		actualStatuscode = response.status
	} catch (error) {
		console.error(error);
	}
});