<template>
	<div class="home-rank container">
		<div class="home-rank_top">
			<span class="rank-title">
				<i class="iconfont icon-maozhao"></i>
				<span>电影排行榜</span>
			</span>
			<span class="rank-tab" v-for="(value,key,index) in movieList" 
			:class="index === idx ? 'active' : ''" 
			@click="idx =index">
				{{key}}
			</span>
		</div>
		<div>
			<div class="m-details_box" v-for="(value,key,index) in movieList" v-show="index===idx?true:false">
				<ul>
					<li class="m-details_items" v-for="item in value">
						<div class="m-details_items-box">
							<div class="details-items_img">
								<img :src="item.movie_pic">
								<span class="sub_title" 
								v-text = "(item.movie_ishot == 1? '热门' : '') || (item.movie_score ? item.movie_score : item.movie_hint)"
								v-show = "item.movie_ishot || item.movie_score || item.movie_hint"></span>
							</div>
							<span class="details-items_name">
								<a href="">{{item.movie_name}}</a>
								<span class="actor_name">{{item.movie_description}}</span>
							</span>
						</div>
						
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import {getData} from 'api/getData'
	import {ERR_OK} from 'api/config'
	export default{
		data(){
			return{
				idx:0,
				movieList:{}
			}
		},
		created(){
			this.getRank()
		},
		methods:{
			getRank(){
				let url = 'topindex'
				getData(url).then((res)=>{
					if(res.code === ERR_OK){
						this.movieList = res.data
					}
				},(err)=>{
					console.log(err)
				})
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
				color: $color-text
				i
					font-size: $font-size-large-x
					color: $color-theme
			.rank-tab
				padding: 6px 10px
				border-radius: 5px
				margin-left: 10px
				cursor: pointer
				font-size: $font-size-medium
				text-align: center
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
	@media (max-width: 992px)

		.home-rank
			margin-top: 20px
			margin-bottom: 10px
			&_top
				padding-left: 5px
				padding-top: 5px
			.rank-tab
				padding: 3px 2px
			.m-details_box
				ul 
					.m-details_items
						width: 25%
	@media (max-width: 767px)
		.home-rank
			&_title
				.title-left
					margin-left: 5px
			.m-details_box
				padding: 5px 0
				ul 
					.m-details_items
						width: 33.333%
						padding: 0 5px
						&-box
							.details-items_name
								text-align: center
								padding: 10px 0
								.actor_name
									display: none
							.details-items_img
								height: 210PX
	@media (max-width: 320px)
		.home-rank
			&_top
				.rank-title
					font-size: $font-size-medium
				.rank-tab
					font-size: $font-size-small
		
</style>