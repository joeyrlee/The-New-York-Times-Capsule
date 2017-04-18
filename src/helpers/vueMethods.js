//dry success response handler
const handleSuccess = function(response, numBooks) {
	//update our books variable with the number of books we wish to display
	vue.$data.books = response.data.results.books.slice(0, numBooks);
};

//dry ajax error handler
const handleError = function(error) {
  alert(`Uh-oh! There seems to have been an error retrieving the data for the ${vue.$data.selectedCategory} search. Please try again!`)
};

//make ajax request to our server
const getBooks = function() {
	axios.get('http://localhost:3000/newbooks/' + vue.date.slice(-4) + '-'
		//re-format the date string from month-day-year to year-month-day
		+ vue.date.slice(0,2) + '-' + vue.date.slice(3,5)
	  + '/' + encodeListName(vue.selectedCategory))
  .then(function(response){ handleSuccess(response, 5) })
  .catch(function(error){ handleError(error) })
}

//make ajax request to our server
const getRandBook = function() {
	axios.get('http://localhost:3000/newbook/' + encodeListName(vue.selectedCategory))
  .then(function(response){
  	handleSuccess(response, 1)
  })
  .catch(function(error){ handleError(error) })
}

//function to transform the english-formatted selected category 
//to the api-friendly encoded format
const encodeListName = function(listName) {
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

window.handleSuccess = handleSuccess;
window.handleError = handleError;
window.getBooks = getBooks;
window.getRandBook = getRandBook;
window.encodeListName = encodeListName;
export {
	handleSuccess,
	handleError,
	getBooks,
	getRandBook,
	encodeListName
}
