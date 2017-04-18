const axios = require('axios');
const API_KEY = require('./config/config.js');
const generateRandomDate = require('./randGenerator.js');

const handleRequest = function(listName, res, date) {
	let isRand = date ? false : true;
	//if date is undefined, generate a random one
	//for pseudo-random book recommendations
	date = date || generateRandomDate();

	axios.get('http://api.nytimes.com/svc/books/v3/lists/'
		+ date + '/' + listName + '.json?api-key=' + API_KEY)
	.then(function(response) {
		res.send(response.data);
	})
	.catch(function(error) {
		isRand
		  ? res.send(`Uh-oh! There seems to have been an error retrieving the user-selected data for the "${listName}" search. Please try again!`)
		  : res.send(`Uh-oh! There seems to have been an error retrieving the pseudo-random data for the "${listName}" search. Please try again!`)
	})
}

module.exports = handleRequest;
