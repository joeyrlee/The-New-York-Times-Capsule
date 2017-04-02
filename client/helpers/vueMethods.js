//dry success response handler
var handleSuccess = function(response, numBooks) {
	console.log('success; response: ', response);
	//update our books variable with the number of books we wish to display
	app.$data.books = response.data.results.books.slice(0, numBooks);
	console.log('app.$data.books:',app.$data.books);
};

//dry ajax error handler
var handleError = function(error) {
	console.log('*********************************')
  console.log('api request error: ', error);
	console.log('*********************************')
  console.log('for selected category: ', app.$data.selectedCategory);
  alert(`Uh-oh! There seems to have been an error retrieving the data for the ${app.$data.selectedCategory} search. Please try again!`)
};

//make ajax request to our server
var getBooks = function() {
	axios.get('/newbooks/' + this.date.slice(-4) + '-'
		//re-format the date string from month-day-year to year-month-day
		+ this.date.slice(0,2) + '-' + this.date.slice(3,5)
	  + '/' + encodeListName(this.selectedCategory))
  .then(function(response){ handleSuccess(response, 5) })
  .catch(function(error){ handleError(error) })
}

//make ajax request to our server
var getRandBook = function() {
	axios.get('/newbook/' + encodeListName(this.selectedCategory))
  .then(function(response){ handleSuccess(response, 1) })
  .catch(function(error){ handleError(error) })
}

//function to transform the english-formatted selected category 
//to the api-friendly encoded format
var encodeListName = function(listName) {
	switch(listName) {
		case 'Combined Print and E-Book Fiction':
			return 'combined-print-and-e-book-fiction';
		case 'Hardcover Fiction':
			return 'hardcover-fiction';
		case 'Trade Fiction Paperback':
			return 'trade-fiction-paperback';
		case 'Combined Print and E-Book Nonfiction':
			return 'combined-print-and-e-book-nonfiction';
		case 'Hardcover Nonfiction':
			return 'hardcover-nonfiction';
		case 'Paperback Nonfiction':
			return 'paperback-nonfiction';
		case 'Advice, How-To & Miscellaneous':
			return 'advice-how-to-and-miscellaneous';
		case "Children's Middle-Grade Hardcover":
			return 'childrens-middle-grade-hardcover';
		case "Children's Picture Books":
			return 'picture-books';
		case "Children's Series":
			return 'series-books';
		case 'Young Adult Hardcover':
			return 'young-adult-hardcover';
		case 'Business':
			return 'business-books';
		case 'Science':
			return 'science';
		case 'Sports and Fitness':
			return 'sports';
	}
}