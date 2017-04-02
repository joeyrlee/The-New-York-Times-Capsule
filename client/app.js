var app = new Vue({
  el: '#app',
  data: {
  	selectedCategory: '',
    date: '',
    books: []
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