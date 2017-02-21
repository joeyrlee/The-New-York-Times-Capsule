var axios = require('axios');
var API_KEY = require('./config/config.js');
var generateRandomDate = require('./randGenerator.js');

var handleRequest = function(listName, res) {
	var date = generateRandomDate();
	//ajax call to NYTimes API with the randomly generated date, list name/type, and api key
	axios.get('http://api.nytimes.com/svc/books/v3/lists/' 
		+ date + '/' + listName + '.json?api-key=' + API_KEY)
	.then(function (response) {
		res.send(response.data);
	})
	.catch(function (error) {
		console.log('*************************')
		console.log('api request error: ', error);
		console.log('*************************')
		console.log('for selected option: ', listName);
		console.log('for generated date: ', date);
		res.send(`Uh-oh! There seems to have been an error retrieving the data for the "${listName}" search. Please try again!`)
	});
}

module.exports = handleRequest;