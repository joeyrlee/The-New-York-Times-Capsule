const App =
`<div>
	<header>
		<h1 id="title">The New York Times Capsule</h1>
		  <a
		  	href="#"
		  	onclick="shareDialog('http://www.facebook.com/sharer.php?u=')"
			>
			  <img
			  	alt="share to facebook"
			  	title="Share To Facebook"
			  	id="facebook-icon"
			  	class="social-icon"
			    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MDAiIGlkPSJzdmcyIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzIGlkPSJkZWZzNCIvPjxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTU1Mi4zNjIxOCkiPjxyZWN0IGhlaWdodD0iNTAwIiBpZD0icmVjdDM3NTgtMSIgcng9IjI1MCIgcnk9IjI1MCIgc3R5bGU9ImZpbGw6IzQ1NjE5ZDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgd2lkdGg9IjUwMCIgeD0iMCIgeT0iNTUyLjM2MjE4Ii8+PHBhdGggZD0iTSAyODkuNjg3NSA2MCBDIDIyMS45MDMxNyA2MCAxOTkuNTMxMjUgOTEuMTAwNTcgMTk5LjUzMTI1IDE0NC40Mzc1IEwgMTk5LjUzMTI1IDE4Ni42NTYyNSBMIDE1NSAxODYuNjU2MjUgTCAxNTUgMjUwLjAzMTI1IEwgMTk5LjUzMTI1IDI1MC4wMzEyNSBMIDE5OS41MzEyNSA0NDAgTCAyODEuNjU2MjUgNDQwIEwgMjgxLjY1NjI1IDI1MC4wMzEyNSBMIDMzNy40Njg3NSAyNTAuMDMxMjUgTCAzNDQuOTY4NzUgMTg2LjY1NjI1IEwgMjgxLjY1NjI1IDE4Ni42NTYyNSBMIDI4MS42NTYyNSAxNDkgQyAyODEuNjU2MjUgMTMxLjk3OTY2IDI4NS4zOTE0OCAxMjMuMzQzNzUgMzExLjgxMjUgMTIzLjM0Mzc1IEwgMzQ0Ljk2ODc1IDEyMy4zNDM3NSBMIDM0NC45Njg3NSA2MCBMIDI4OS42ODc1IDYwIHogIiBpZD0icmVjdDI5ODktMSIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw1NTIuMzYyMTgpIi8+PC9nPjwvc3ZnPg=="
			  />
			</a>
			<a
				href="#"
				onclick="shareDialog('https://twitter.com/intent/tweet?url=')"
			>
			  <img
			  	alt="share to twitter"
			  	title="Share To Twitter"
			  	id="twitter-icon"
			  	class="social-icon"
			    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MDAiIGlkPSJzdmcyIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzIGlkPSJkZWZzNCIvPjxnIGlkPSJsYXllcjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTU1Mi4zNjIxOCkiPjxyZWN0IGhlaWdodD0iNTAwIiBpZD0icmVjdDI5OTAtMSIgcng9IjI1MCIgcnk9IjI1MCIgc3R5bGU9ImZpbGw6IzU1YWNlZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgd2lkdGg9IjUwMCIgeD0iMCIgeT0iNTUyLjM2MjE4Ii8+PGcgaWQ9ImxheWVyMS05IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQ5LjAwNTE1LDgwLjI5NDM3MikiLz48ZyBpZD0ibGF5ZXIxLTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NzUuNzE0MjksMzkuOTk5OTk5KSIvPjxnIGlkPSJsYXllcjEtOTMiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk5Mjg5NDUsMCwwLDAuOTk5Mjg5NDUsNDc0LjcwMDIsLTQwLjgxOTI4KSIvPjxwYXRoIGQ9Im0gMzA5Ljg1LDY3Mi4zMTIxOCBjIC0zNS40NzA3OSwwLjg5ODc5IC02My45MjUsMjkuOTMxMzggLTYzLjkyNSw2NS42MjUgMCw1LjEzODI3IDAuNTUxMjIsMTAuMTYxNTYgMS42NzUsMTQuOTc1IC01NC41NjU2NywtMi43NDEyNiAtMTAyLjk0Mjg3LC0yOC44Nzc0OSAtMTM1LjMyNSwtNjguNiAtNS42NTE0Nyw5LjY5MTkxIC04LjksMjAuOTgxNTggLTguOSwzMy4wMjUgMCwyMi43NzQ2NyAxMS42MDgwOSw0Mi44NTQzOCAyOS4yMjUsNTQuNjI1IC0xMC43NTcyMiwtMC4zNDQyOCAtMjAuODk2MDYsLTMuMzA3NTggLTI5Ljc1LC04LjIyNSAtMC4wMDUsMC4yNzI4MiAwLDAuNTcwNjkgMCwwLjg1IDAsMzEuODA0MDIgMjIuNjM3OSw1OC4zMDg4IDUyLjY3NSw2NC4zNSAtNS41MDg1MiwxLjQ5NDA2IC0xMS4zMTA3NSwyLjMgLTE3LjMsMi4zIC00LjIzNTM0LDAgLTguMzQyMDMsLTAuNDAxOTggLTEyLjM1LC0xLjE3NSA4LjM2MDIyLDI2LjA4MTA5IDMyLjU3NTA2LDQ1LjA3Mzg1IDYxLjMsNDUuNiAtMjIuNDY5MzcsMTcuNjEwNDMgLTUwLjczNTM0LDI4LjEgLTgxLjUsMjguMSAtNS4yOTQxNiwwIC0xMC41MzY3NSwtMC4yODkzOCAtMTUuNjc1LC0wLjkgMjkuMDYyNzIsMTguNjM2ODMgNjMuNTUyODIsMjkuNSAxMDAuNjI1LDI5LjUgMTIwLjc2NTUyLDAgMTg2LjgsLTEwMC4wNDA1OCAxODYuOCwtMTg2LjggMCwtMi44NDUyIC0wLjA1MTcsLTUuNzA1NzcgLTAuMTc1LC04LjUyNSAxMi44MjI5NCwtOS4yMzcyIDIzLjk1NDU0LC0yMC44MDc3NiAzMi43NSwtMzMuOTc1IC0xMS43NjQxLDUuMjI5MjIgLTI0LjQxNTg2LDguNzcxNDYgLTM3LjcsMTAuMzUgMTMuNTYzNDYsLTguMTE5OSAyMy45NzA2MSwtMjAuOTgxNjYgMjguODc1LC0zNi4zMjUgLTEyLjY4NjUyLDcuNTI4NzcgLTI2LjczOTkzLDEzLjAwMDg1IC00MS43LDE1Ljk1IC0xMS45NzE5NywtMTIuNzU3OTggLTI5LjA0MTM3LC0yMC43MjUgLTQ3LjkyNSwtMjAuNzI1IC0wLjU2NjQ2LDAgLTEuMTM2OTgsLTAuMDE0MyAtMS43LDAgeiIgaWQ9InJlY3QyOTg5IiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIi8+PC9nPjwvc3ZnPg=="
			  />
			</a>
	  <p id="subtitle">Authoritatively ranked lists of books sold in the United States, sorted by format, genre, and date.</p>
	</header>

	<section>
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
  </section>

	<section id="results-container">
		<ol id="books">
			<book v-for="book in books" v-bind:book="book"></book>
		</ol>
  </section>
</div>`;

window.App = App;
export default App;
