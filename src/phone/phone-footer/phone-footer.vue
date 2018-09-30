<template>
	<div class="phone-footer">
		<router-link tag="div" class="link" to="/Home">
			<i class="iconfont icon-shouye-copy-copy-copy"></i>
			<span class="tab-link">首页</span>
		</router-link>
		<router-link tag="div" class="link" to="/Movie">
			<i class="iconfont icon-dianying"></i>
			<span class="tab-link">电影</span>
		</router-link>
		<router-link tag="div" class="link" to="/Tv">
			<i class="iconfont icon-tv"></i>
			<span class="tab-link">电视剧</span>
		</router-link>
		<router-link tag="div" class="link" to="/Variety">
			<i class="iconfont icon-shipin"></i>
			<span class="tab-link">综艺</span>
		</router-link>
		<router-link tag="div" class="link" to="/Member">
			<i class="iconfont icon-gerenzhongxin2"></i>
			<span class="tab-link">个人中心</span>
		</router-link>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"
	.phone-footer
		visibility:hidden
		position: fixed
		left: 0
		right: 0
		bottom: 0
		width: 100%
		background-color: #fafafa
		display: flex
		.link
			flex: 1
			display: flex
			flex-direction: column
			align-items: center
			color: $color-background
			font-size: $font-size-small
			padding-top: 5px
			padding-bottom: 5px
			i 
				font-size: $font-size-large
				margin-bottom: 5px
		.router-link-active
			color: $color-theme
			background-color: $color-text
	@media (max-width: 767px)
		.phone-footer
			visibility:visible

	
		
	
</style>