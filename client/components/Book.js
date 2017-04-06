Vue.component('book', {
	props: ['book'],
	template:
		`<li class='bookContainer'>
			{{ book.rank }}
			{{ book.book_image }}
			{{ book.title }}
			{{ book.author }}
			{{ book.description }}
		</li>`
})