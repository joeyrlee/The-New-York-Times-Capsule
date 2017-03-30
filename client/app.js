var app = new Vue({
  el: '#app',
  data: {
  	selectedCategory: '',
  	book: '',
  	books: [],
    date: ''
  },
  methods: {
  	//call the NYTimes API and store/update the data in our book
  	getBook: getBook,

		//transforms the english-formatted selected 
		//option to the api-friendly encoded format
		encodeListName: encodeListName
	}
});