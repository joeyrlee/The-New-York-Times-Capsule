//Vue.js file for facilitating the 
//two-way search input data binding

var app = new Vue({
  el: '#button',
  data: {
  	userInput: 'Enter a book name and press enter'
  },
  methods: {
  	getBook: function() {
	  var currInput = this.userInput;
	  console.log('this.userInput: ', this.userInput)
		},
		//generate a random date between June 2008 and now and return the string
		generateRandomDate: function() {
		  var date;
		  while(!date){
			  //the NYTimes API only has data from as early as June 2008
			  var year = 2008 + Math.floor(Math.random() * 10);
			  var month = Math.floor(Math.random() * 13);
			  var day = Math.floor(Math.random() * 29);
		  	
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