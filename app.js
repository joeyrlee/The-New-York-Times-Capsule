//Vue.js file for facilitating the 
//two-way search input data binding

var app = new Vue({
  el: '#app',
  data: {
  	selectedOption: '',
  	books: {}
  },
  methods: {
  	//call the NYTimes API and store/update the data in 
  	getBook: function() {
  		//because we don't want the user having to interact with re-pressing the 
  		//generate read button on error and the api has various holes of data that 
  		//vary by each search category, even within the June 2008-present timeline,
  		//a while loop is configured to generate a new date and re-attempt the http 
  		//request when no data is found for requested ones
  		while (!data) {
		  	var date = this.generateRandomDate();
		  	axios.get('http://api.nytimes.com/svc/books/v3/lists/' + date + '/'
		  		+ this.encodeListName(this.selectedOption) + '.json?api-key=' + '1bd910ccf31f485e87baf23e4d3cc6c6')
			  .then(function (response) {
			    console.log(`success; response for ${this.selectedOption}: `, response);
			    this.books = response.data;
			  })
			  .catch(function (error) {
			    console.log('api request error: ', error);
			    console.log('selected option: ', this.selectedOption);
			    console.log('randomly generated date: ', date);
		  	});
			}
		},
		//function to transform the 
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
		},
		//generate a random date between June 2008 and now and return the formatted string
		generateRandomDate: function() {
		  var date;
		  while(!date){
			  //the NYTimes API only has data from as early as June 2008
			  var year = 2008 + Math.floor(Math.random() * 10);
			  var month = Math.floor(Math.random() * 13);
			  if (String(month).length < 2) {
			  	month = '0' + month;
			  }
			  var day = Math.floor(Math.random() * 29);
			  if (String(day).length < 2) {
			  	day = '0' + day;
			  }
		  	
		  	var randomDate = new Date(year,month,day)

		  	//if the date is in the future OR before 2008-06-02
			  if (randomDate > new Date() || randomDate < new Date(2008,06,02)) {
			  	//reset the loop
			  	date = undefined;
			  } else {
			  	return `${year}-${month}-${day}`;
			  }
		  }
	  }
	}
});