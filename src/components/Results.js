const Results = `<section id="results-container">
	<ol id="books">
		<book v-for="book in books" v-bind:book="book"></book>
	</ol>
</section>`;

window.Results = Results;
export default Results;
