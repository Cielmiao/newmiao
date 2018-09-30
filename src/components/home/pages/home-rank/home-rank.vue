<template>
	<div class="home-rank container">
		<div class="home-rank_top">
			<span class="rank-title">
				<i class="iconfont icon-maozhao"></i>
				<span>电影排行榜</span>
			</span>
			<span class="rank-tab" v-for="(item,index) in movieList" 
			:class="index === idx ? 'active' : ''" 
			@click="idx =index">
				{{item.title}}
			</span>
		</div>
		<div>
			<div class="m-details_box" v-for="(list,index) in movieList" v-show="index===idx?true:false">
				<ul>
					<li class="m-details_items" v-for="item in list.details">
						<div class="m-details_items-box">
							<div class="details-items_img">
								<img :src="item.movie_pic">
								<span class="sub_title" 
								v-text = "(item.movie_ishot == 1? '热门' : '') || (item.movie_score ? item.movie_score : item.movie_hint)"
								v-show = "item.movie_ishot || item.movie_score || item.movie_hint"></span>
							</div>
							<span class="details-items_name">
								<a href="">{{item.movie_name}}</a>
								<span class="actor_name">{{item.movie_star}}</span>
							</span>
						</div>
						
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				idx:0,
				movieList:[
					{
						title: "经典榜",
						details:[1,2]
					},
					{
						title: "热播榜",
						details:[2,2]
					},
					{
						title: "全球榜",
						details:[3,2]
					}
				]
			}
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"
	.home-rank
		margin-top: 50px
		margin-bottom: 40px
		&_top
			padding-top: 20px
			padding-left: 20px
			.rank-title
				font-size: $font-size-medium-x
				color: #fff
				i
					font-size: $font-size-large-x
					color: $color-theme
			.rank-tab
				padding: 6px 10px
				border-radius: 5px
				margin-left: 10px
				cursor: pointer
			.active
				background-color: #ccc
				color: $color-theme
		.m-details_box
			width: 100%
			padding: 10px 20px
			overflow: hidden
			ul 
				width: 100%
				.m-details_items
					width: 16.666%
					float: left
					padding: 0 8px
					margin: 10px 0
					&-box
						width: 100%
						
						.details-items_img
							position: relative
							width: 100%
							height: 246px
							img 
								width: 100%
								height: 100%
							.sub_title
								padding: 5px
								background-color: #1A9CD6
								font-size: 12px
								color: #fff
								position: absolute
								top: 8px
								left: -5px
								&:before
									content: ""
									border-top: 4px solid #09BB07
									border-left: 4px solid transparent
									position: absolute
									left: 1px
									bottom: -4px			
						.details-items_name
							
							width: 100%
							display: flex
							flex-direction: column
							padding: 20px 0
							.actor_name
								textOverflow()
								width: 100%
								font-size: $font-size-small
								margin-top: 10px
								color: $color-dialog-text
							a
								textOverflow()
</style>