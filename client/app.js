var app = new Vue({
  el: '#app',
  data: {
  	selectedCategory: '',
  	book: '',
  	books: [],
    date: '',
    singleBook: false
  },
  methods: {
  	//bind the global ajax methods to the vue instance
    //already bound in index.html to button click handlers
    getBooks: getBooks,
  	getRandBook: getRandBook,

		//transforms the english-formatted selected 
		//option to the api-friendly encoded format
		encodeListName: encodeListName
	}
});