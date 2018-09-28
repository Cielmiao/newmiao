<template>
	<div class="phone-category container">
		<div class="phone-category_icon">
			<ul>
				<li v-for="item in iconList" class="category-icon_item">
					<i class="iconfont" :class="item.icon"></i>
					<span>{{item.txt}}</span>
				</li>
			</ul>
		</div>
		<div class="phone-category_title">
			<ul>
				<li v-for="list in titleList" class="category-title_list">
					<a href="">{{list}}</a>
				</li>
			</ul>
		</div>
	</div>
</template>	
<script>
	export default{
		props:{
			iconList:{
				type:Array,
				require:true
			},
			titleList:{
				type:Array,
				require:true
			}
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"
	.phone-category
		padding: 5px
		display: none
		&_icon
			width: 100%
			ul
				width: 100%
				display: flex
			.category-icon_item
				flex: 1
				width: 25%
				border: 1px solid $color-theme
				display: flex
				flex-direction: column
				align-items: center
				margin: 8px
				padding: 8px 0
				border-radius: 5px
				i
					font-size: $font-size-large-x
					color: $color-theme
					margin-bottom: 5px
		&_title
			width: 100%
			overflow: hidden
			padding: 0 4px
			.category-title_list
				width: 20%
				float: left
				padding: 5px
				a
					width: 100%
					display: inline-block
					border-radius: 5px
					border: 1px solid $color-theme
					padding: 8px 0
					text-align: center
					font-size: $font-size-small
			
				
	@media (max-width: 992px)
		.phone-category
			display: block
	@media (max-width: 767px)
		.phone-category
			.category-icon_item
				margin:4px
				font-size: $font-size-small
</style>