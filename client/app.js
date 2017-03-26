//Vue.js file for facilitating the 
//two-way search input data binding

var app = new Vue({
  el: '#app',
  data: {
  	selectedOption: '',
  	book: '',
  	books: [],
    date: ''
  },
  methods: {
  	//call the NYTimes API and store/update the data in our book
  	getBook: getBook,

		//transforms the english-formatted selected 
		//option to the api-friendly encoded format
		encodeListName: encodeListName,

		//make a call to the server to fetch stored user data
		//persisted in the database
		getUserData: getUserData
	}
});