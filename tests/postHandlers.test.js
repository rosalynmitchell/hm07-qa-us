// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"deliveryTime": 9,
    "products": [
        {
            "id": 1,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 3
        }
    ]
}

test('Status code returns 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatuscode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatuscode).toBe(200)
});




test('Status code returns 201', async () => {
	let actualReponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualresponse = response.status
	} catch (error) {
		console.error(error);
	}
});
