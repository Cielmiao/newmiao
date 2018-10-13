<template>
	<div class="home-list container">
		<div v-for="list in homeList">
			<div class="home-list_title">
				<span class="title-left">
					<i class="iconfont icon-sty" :class="list.icon"></i>
					<h3>{{list.title}}</h3>
				</span>
				<span class="title-right">
					<router-link tag='a' :to='list.router' @click='load'>更多 ></router-link>
				</span>
			</div>
			<div class="m-details_box">
				<ul>
					<li class="m-details_items" v-for="item in list.details[0]">
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
	import {getData} from 'api/getData'
	import {ERR_OK} from 'api/config'
	export default{
		data(){
			return{
				homeList:[
					{
						icon:'icon-VIP',
						title: '抢先看',
						router:'/NewMovie',
						details: []
					},
					{
						icon:'icon-live',
						title: '电影',
						router:'/Movie',
						details: []
					},
					{
						icon:'icon-tv',
						title: '电视剧',
						router:'/Tv',
						details: []
					},
					{
						icon:'icon-shipin',
						title: '综艺',
						router:'/Variety',
						details: []
					}
				]
			}
		},
		created(){
			this.getIndexMovie()

		},
		methods:{
		//获取首页数据
			getIndexMovie(){
				let url = 'api/getIndexMovie'
				getData(url).then((res)=>{
					if (res.code === ERR_OK){
						let _res = res.data
						let _list = []
						_list.push(_res.indexnew,_res.indexmovie,_res.indextv,_res.indexzongyi)
							for(let j=0;j<this.homeList.length;j++){
								this.homeList[j].details.push(_list[j])
							}
					}
				},(err)=>{
					console.log(err)
				})
				
			},
			load(){
			window.location.reload()
			}
		}

	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"
	.home-list
		&_title
			padding: 20px 0
			display: flex
			flex-direction: row
			justify-content: space-between
			align-items: center
			.title-left
				margin-left: 20px
				display: flex
				flex-direction: row 
				align-items: center
				h3
					font-size: $font-size-medium-x
				.icon-sty
					font-size: $font-size-large-xl
					color: $color-theme
					margin-right: 5px
			.title-right
				font-size: $font-size-small
				a 
					margin: 0 10px
					color: $color-dialog-text
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
					height: 326px
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
		.home-list
			.m-details_box
				ul 
					.m-details_items
						width: 25%
	@media (max-width: 767px)
		.home-list
			margin-bottom: 50px
			&_title
				.title-left
					margin-left: 5px
			.m-details_box
				padding: 5px 0
				ul 
					.m-details_items
						width: 33.333%
						height: 236px
						padding: 0 5px
						&-box
							.details-items_name
								text-align: center
								padding: 10px 0
								.actor_name
									display: none
							.details-items_img
								height: 200PX
	@media (max-width: 320px)
		.home-list
			&_title
				.title-left
					h3
						font-size: $font-size-medium
		
				
</style>