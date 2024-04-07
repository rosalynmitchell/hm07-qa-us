# Sprint 7 project
In project 7 I used Javascript code in visual studios to write test for GET, POST, PUT, and DELETE.

Open Gitbash, enter the commands: 
cd~
mkdir projects
cd projects
clone your gitbash through your account with the file hm07-qa-us
open gitbash, copy ssh url
use the following command in the terminal: 
git clone git@github.com:username/hm07-qa-us
run command npm install

open the config.js file in the hm07-qa-us folder. 
file should look like this: 
// eslint-disable-next-line no-undef
module.exports = {
    API_URL: "server_url"
}

update server url as needed. 

Testing getHandlers.test.js
Open Visual studios 
click open
select hm07-qa-us folder 
select test folder
select gethandlers.test.js file 
click open
premade script is posted in visual studio
Open urban grocers api
copy GET url "Get a list of warehouses" 
The reponse should return a 200 code 
paste the GET url /api/v1/warehouses in the script code 
Use letactualStatusCode; to see if status code return a 200. 
Use letactualResponseBody; to see if response body returns a 200 code.

// eslint-disable-next-line no-undef
const config = require('../config');

test('Returns a 200 code', async () => {
	let actualStatuscode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatuscode = response.status
	} catch (error) {
		console.error(error);
	}
});


test('Response should contain....', async () => {
	let actualReponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualReponseBody = response.status
	} catch (error) {
		console.error(error);
	}
});
go to terminal 
type npx jest getHandlers.test.js to see if test passed. 


Testing Posthandlers.test.js
Open Visual studios 
click open
select hm07-qa-us folder 
select test folder
select posthandlers.test.js file 
click open
premade script is posted in visual studio
Open urban grocers api
Click warehouse: "Everything you need" 
copy POST url 
paste POST url /everything-you-need/v1/calculate in script code 
Use the const request body command 
Copy and paste the request body from urban grocers API to check the reponse body passes with a 200 code 
Go back to Urban Grocers API 
Click create a kit 
copy POST url 
paste POST url /api/v1/kits 
check the status code returns a 201 in the second script code 
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
	} catch (error) {
		console.error(error);
	}
});




test('Status code returns 201', async () => {
	let actualStatuscode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
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
});
go to terminal 
type npx jest postHandlers.test.js to see if test passed. 

Testing putHandlers.test.js
Open Visual studios 
click open
select hm07-qa-us folder 
select test folder
select puthandlers.test.js file 
click open
premade script is posted in visual studio
Open urban grocers api
Click main.basket: "Adding groceries to the cart" 
copy PUT url 
paste PUT url /api/v1/orders/:id in script code 
Use the const request body command 
Copy and paste the request body from urban grocers API to check the reponse body passes with a 200 code 
Go back to Urban Grocers API 
Click main.products "grocery item price change" 
copy PUT url 
paste PUT url  /api/v1/products/:id
check the status code returns a 200 in the second script code 
// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
		"productsList": [
			{
				"id": 1,
				"quantity": 4
			},
			{
				"id": 5,
				"quantity": 2
			},
			{
				"id": 3,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 1
			}
		]
	}

test('Response body status code 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	} catch (error) {
		console.error(error);
	}
});



test('Status code returns a 200', async () => {
	let actualStatuscode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatuscode = response.status
	} catch (error) {
		console.error(error);
	}
});
go to terminal 
type npx jest putHandlers.test.js to see if test passed. 

Testing deleteHandlers.test.js
Open Visual studios 
click open
select hm07-qa-us folder 
select test folder
select deletehandlers.test.js file 
click open
premade script is posted in visual studio
Open urban grocers api
click Main.kits "deleteing the kit"
copy DELETE url /api/v1/kits/:id
paste DELETE url /api/v1/kits/:id in script code
The status code should return a 200 code
click Main.basket deleting the cart
copy DELETE url  /api/v1/orders/:id
paste DELETE url /api/v1/orders/:id in second script code 
Use letactualStatusCode; to see if status code return a 200. 

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

go to terminal 
type npx jest deleteHandlers.test.js to see if test passed. 

Push Files to Github Repository (GET, POST, PUT, DELETE, README.md)
make sure all js files are saved 
check to see if server is updated 
Use the following commands: 
cd ~ sample-project
cd hm07-qa-us
git commit -am "Project 7" 
git push 