//call the NYTimes API and store/update the data in our book
var getBook = function() {
	console.log(selectedCategory);
	// axios.get('/newbook/' + encodeListName(this.selectedCategory))
 //  .then(function (response) {
 //  	console.log('response: ', response);
	// 	app.$data.books = response.data.results.books.slice(0,5);
	// 	app.$data.book = app.$data.books[0];
	// 	// app.$data.bookImage = app.$data.book.book_image;
	// 	// var img = document.createElement('img');
	// 	// img.setAttribute('src', app.$data.bookImage);
	// 	// document.getElementById('book').appendChild(img);
 //    console.log(`success; response found this book: `, app.$data.book);
 //  })
 //  .catch(function (error) {
 //  	console.log('*********************************')
 //    console.log('api request error: ', error);
 //  	console.log('*********************************')
 //    console.log('for selected category: ', this.selectedCategory);
 //    alert(`Uh-oh! There seems to have been an error retrieving the data for the ${this.selectedCategory} search. Please try again!`)
	// });
}

//function to transform the english-formatted selected option 
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