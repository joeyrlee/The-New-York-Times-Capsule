var axios = require('axios');
var API_KEY = require('./config/config.js');
var generateRandomDate = require('./randGenerator.js');

var handleRequest = function(listName, res, date) {
	var isRand = date ? false : true;
	//if date is undefined, generate a random one
	//for pseudo-random book recommendations
	date = date || generateRandomDate();

	axios.get('http://api.nytimes.com/svc/books/v3/lists/'
		+ date + '/' + listName + '.json?api-key=' + API_KEY)
	.then(function(response) {
		res.send(response.data);
	})
	.catch(function(error) {
		console.log('*************************')
		console.log('api request error: ', error);
		console.log('*************************')
		console.log('for selected category: ', listName);
		console.log('for date: ', date);
		//change the error response message if the request was to be random for greater specificity
		isRand
		  ? res.send(`Uh-oh! There seems to have been an error retrieving the user-selected data for the "${listName}" search. Please try again!`)
		  : res.send(`Uh-oh! There seems to have been an error retrieving the pseudo-random data for the "${listName}" search. Please try again!`)
	})
}

module.exports = handleRequest;
