<template>
	<div class="m-pages">
		<ul class="pages">
			<li><</li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>></li>
		</ul>
	</div>
</template>
<script>
	
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"
	.m-pages
		margin: 0 auto
		.pages
			display: flex
			flex-direction: row 
			li 
				padding: 10px
				border: 1px solid $color-highlight-background 

</style>