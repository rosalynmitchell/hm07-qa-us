// eslint-disable-next-line no-undef
const config = require('../config');

test('Status Code Should Returns a 200 code', async () => {
	let actualStatuscode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatuscode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatuscode).toBe(200)
});


test('Response body should return a 200 code', async () => {
	let actualReponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualReponseBody = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualReponseBody).toBe(200)
});


