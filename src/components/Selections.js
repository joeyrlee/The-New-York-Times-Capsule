const Selections =
`<section>
  <p class="instructions">Select a category:</p>
  <div id=selections-container>
		<select v-model="selectedCategory">
		  <option>Combined Print &amp; E-Book Fiction</option>
		  <option>Hardcover Fiction</option>
		  <option>Trade Fiction Paperback</option>
		  <option>Combined Print and E-Book Nonfiction</option>
		  <option>Hardcover Nonfiction</option>
		  <option>Paperback Nonfiction</option>
		  <option>Advice, How-To &amp; Miscellaneous</option>
		  <option>Children's Middle-Grade Hardcover</option>
		  <option>Children's Picture Books</option>
		  <option>Children's Series</option>
		  <option>Young Adult Hardcover</option>
		  <option>Business</option>
		  <option>Science</option>
		  <option>Sports and Fitness</option>
		</select>
		<p class="instructions">Select a date:</p>
	  <input type="text" id="datepicker" />
		<div id="buttons">
			<button 
		    type="button"
		    v-on:click=getBooks()
		    >See List
		  </button>
			<button 
		    type="button"
		    v-on:click=getRandBook()
		    >Recommend Me A Book
		  </button>
		</div>
	</div>

  <h2 id="selected-category" v-if="books.length > 0">
  	{{ selectedCategory }} &#10093;
  </h2>
</section>`;

window.Selections = Selections;
export default Selections;
