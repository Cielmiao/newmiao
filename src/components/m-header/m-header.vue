<template>
	<div class="header">
		<div class="header-container container">
			<div class="header-container-logo">
				<a href="">
					<img src="" alt="">
				</a>
			</div>
			<nav class="header-container-nav">
				<ul>
					<router-link tag="li" class="link" to="/Home">
						<span class="tab-link">首页</span>
					</router-link>
					<router-link tag="li" class="link" to="/Movie">
						<span class="tab-link">电影</span>
					</router-link>
					<router-link tag="li" class="link" to="/Tv">
						<span class="tab-link">电视剧</span>
					</router-link>
					<router-link tag="li" class="link" to="/Variety">
						<span class="tab-link">综艺</span>
					</router-link>
					<router-link tag="li" class="link" to="/Member">
						<span class="tab-link">个人中心</span>
					</router-link>
				</ul>
			</nav>
			<div class="header-container-login">
				<i class="iconfont icon-gerenzhongxin2"></i>
				<span>立即登录</span>
			</div>
			<div class="header-container-search">
				<input class="search-input" type="text" placeholder="请输入影片关键词">
				<span class="search-icon">
					<i class="iconfont icon-search"></i>
				</span>
			</div>
			
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"
	.header
		width: 100%
		height: 64px
		background-color: $color-background
		&-container
			height: 100%
			&-logo
				width: 	10%
				height: 100%
				float: left
				background-color: #fff
			&-nav
				width: 40%
				float: left
				height: 100%
				.link 
					float: left
					height: 64px
					line-height: 64px
					margin: 0 20px
					cursor: pointer 
					&:hover
						color: $color-theme
				.router-link-active
					border-bottom: 2px solid $color-theme
			&-login
				width: 10%
				text-align: right
				float: right
				height: 64px
				line-height: 64px
				&:hover
					cursor: pointer
					color: $color-theme
				i 
					font-size: $font-size-large
				span
					font-size: $font-size-mediue
			&-search
				position: relative
				box-sizing: border-box
				float: right
				width: 40%
				height: 100%
				padding-top: 15px
				padding-left: 20%
				.search-input
					width: 100%
					height: 34px
					border: none
					border-radius: 5px
					padding: 0 10px
					box-sizing: border-box
					outline:none
					&:focus
						box-shadow: 0 0 0 1px $color-theme
				.search-icon
					display: inline-block
					position:absolute
					right: 6px
					top: 24px

	@media (max-width: 992px)
		.header-container
			&-nav
				width: 50%
			&-search
				width: 30%
				padding-left: 0
				padding-right: 10px
	@media (max-width: 769px)
		.header-container
			font-size: $font-size-small
			&-logo
				width: 15%
			&-nav
				width: 40%
				.link 
					margin: 0 10px
			&-login
				width: 15%	
				margin-left: -10px
			&-search
				.search-icon
					right: 15px
	@media (max-width: 767px)
		.header-container
			padding: 0 10px 0 10px
			&-logo,&-nav,&-login
				display: none
			&-search
				width: 100%
				padding-right: 0

			

</style>