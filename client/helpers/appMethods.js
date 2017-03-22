//call the NYTimes API and store/update the data in our book
var getBook = function() {
	axios.get('/newbook/' + this.encodeListName(this.selectedOption))
  .then(function (response) {
  	console.log('response: ', response);
		app.$data.book = response.data.results.books[0];
		// app.$data.bookImage = app.$data.book.book_image;
		// var img = document.createElement('img');
		// img.setAttribute('src', app.$data.bookImage);
		// document.getElementById('book').appendChild(img);
    console.log(`success; response found this book: `, app.$data.book);
  })
  .catch(function (error) {
  	console.log('*********************************')
    console.log('api request error: ', error);
  	console.log('*********************************')
    console.log('for selected option: ', this.selectedOption);
    alert(`Uh-oh! There seems to have been an error retrieving the data for the ${this.selectedOption} search. Please try again!`)
	});
}

//function to transform the english-formatted selected option 
//to the api-friendly encoded format
var encodeListName = function(listName) {
	switch(listName) {
		case 'Combined Print and E-Book Fiction':
			return 'combined-print-and-e-book-fiction';
		case 'Combined Print and E-Book Nonfiction':
			return 'combined-print-and-e-book-nonfiction';
		case 'Hardcover Fiction':
			return 'hardcover-fiction';
		case 'Hardcover Nonfiction':
			return 'hardcover-nonfiction';
		case 'Trade Fiction Paperback':
			return 'trade-fiction-paperback';
		case 'Paperback Nonfiction':
			return 'paperback-nonfiction';
		case 'Advice, How-To, and Miscellaneous':
			return 'advice-how-to-and-miscellaneous';
		case "Children's Middle-Grade Hardcover":
			return 'childrens-middle-grade-hardcover';
		case 'Picture Books':
			return 'picture-books';
		case 'Childrens Series Books':
			return 'series-books';
		case 'Young Adult Hardcover':
			return 'young-adult-hardcover';
		case 'Business Books':
			return 'business-books';
		case 'Science':
			return 'science';
		case 'Sports and Fitness':
			return 'sports';
	}
}

//make a call to the server to fetch stored user data
//persisted in the database
var getUserData = function() {
	console.log('getUserData invoked');
}