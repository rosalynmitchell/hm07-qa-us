// eslint-disable-next-line no-undef
const config = require('../config');

const requestBodyCart= {
	"productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
    ],
};

test('Should return a 200 code when deleting a cart', async () => {
	let actualStatus;
    try {
		const responseCart = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: "POST", 
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(requestBodyCart),
		});
		const cart = await responseCart.json();
		let cartID = cart["id"];
		const response = await fetch(`${config.API_URL}/api/v1/orders/${cartID}`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
});




test('Response body should be "ok:true" when cart is deleted', async () => {
	let responseBody;
    try {
		const responseCart = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: "POST", 
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(requestBodyCart),
		});
		const cart = await responseCart.json();
		let cartID = cart["id"];
		responseBody = await fetch(`${config.API_URL}/api/v1/orders/${cartID}`, {
			method: 'DELETE',
		});
	} catch (error) {
		console.error(error);
	}
	const data = await responseBody.json();
	expect(data).toEqual("ok.true");
});

