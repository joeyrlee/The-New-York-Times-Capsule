require('./styles.css');
import App from './components/App';
import book from './components/Book.vue';
import shareDialog from './helpers/assortedMethods.js';
import {
	handleSuccess,
	handleError,
	getBooks,
	getRandBook,
	encodeListName
} from './helpers/vueMethods.js';

window.vue = new Vue({
	el: '#vue',
	components: {
		book
	},
	data: {
  	selectedCategory: '',
    date: '',
    books: []
  },
  template: App
})
