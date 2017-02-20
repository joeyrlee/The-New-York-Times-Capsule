//Vue.js file for facilitating the 
//two-way search input data binding

var app = new Vue({
  el: '#search',
  data: {
  	userInput: 'Enter a book name here'
  },
  methods: {
  	handleSearchInputChange: function(e) {
	  var currInput = this.userInput;
	  console.log('this.userInput: ', this.userInput)
	}
  }
});