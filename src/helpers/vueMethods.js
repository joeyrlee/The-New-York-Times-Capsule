//dry success response handler
export const handleSuccess = function(response, numBooks) {
	//update our books variable with the number of books we wish to display
	app.$data.books = response.data.results.books.slice(0, numBooks);
};

//dry ajax error handler
export const handleError = function(error) {
  alert(`Uh-oh! There seems to have been an error retrieving the data for the ${app.$data.selectedCategory} search. Please try again!`)
};

//make ajax request to our server
export const getBooks = function() {
	axios.get('/newbooks/' + this.date.slice(-4) + '-'
		//re-format the date string from month-day-year to year-month-day
		+ this.date.slice(0,2) + '-' + this.date.slice(3,5)
	  + '/' + encodeListName(this.selectedCategory))
  .then(function(response){ handleSuccess(response, 5) })
  .catch(function(error){ handleError(error) })
}

//make ajax request to our server
export const getRandBook = function() {
	axios.get('/newbook/' + encodeListName(this.selectedCategory))
  .then(function(response){
  	handleSuccess(response, 1)
  })
  .catch(function(error){ handleError(error) })
}

//function to transform the english-formatted selected category 
//to the api-friendly encoded format
export const encodeListName = function(listName) {
	switch(listName) {
		case 'Combined Print & E-Book Fiction':
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

// window.handleSuccess = handleSuccess;
// window.handleError = handleError;
// window.getBooks = getBooks;
// window.getRandBook = getRandBook;
// window.encodeListName = encodeListName;
