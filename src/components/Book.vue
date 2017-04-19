<template>
	<li class="book">
		<div class="book-rank">{{book.rank}}</div>
		<div class="img-box">
	  	<img class="book-image" :src="book.book_image" />
	  </div>
		<div class="book-content">
		  <div class="book-title">{{book.title}}</div>
		  <div class="book-author">by {{book.author}}</div>
		  <div class="book-description">{{book.description}}</div>
		</div>
	</li>
</template>

<script>
	export default {
		props: ['book']
	}
</script>