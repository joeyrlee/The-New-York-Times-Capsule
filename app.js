//Vue.js file for facilitating the 
//two-way search input data binding

var app = new Vue({
  el: '#app',
  data: {
  	selectedOption: '',
  	book: '',
  	bookImage: ''
  },
  methods: {
  	//call the NYTimes API and store/update the data in our book
  	getBook: function() {
  		//because we don't want the user having to interact with re-pressing the 
  		//generate read button on error and the api has various holes of data that 
  		//vary by each search category, even within the June 2008-present timeline,
  		//a while loop is configured to generate a new date and re-attempt the http 
  		//request when no data is found for requested ones

  		//doesn't work, but saving to investigate why
  	// 	var gotData;
  	// 	while (!gotData) {
		 //  	var date = this.generateRandomDate();
		 //  	axios.get('http://api.nytimes.com/svc/books/v3/lists/' + date + '/'
		 //  		+ this.encodeListName(this.selectedOption) + '.json?api-key=' + '1bd910ccf31f485e87baf23e4d3cc6c6')
			//   .then(function (response) {
			//     this.books = response.data.results.books.slice(0,5);
			//     console.log(`success; response found these books: `, this.books);
			//     gotData = true;
			//   })
			//   .catch(function (error) {
			//     console.log('api request error: ', error);
			//     console.log('for selected option: ', this.selectedOption);
			//     console.log('for generated date: ', date);
		 //  	});
			// }

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
		},

		//function to transform the english-formatted selected option 
		//to the api-friendly encoded format
		encodeListName: function(listName) {
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
	}
});