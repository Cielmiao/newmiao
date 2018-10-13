<template>
	<div class="search container">
		<div class="search-result">
			<div class="title">
				<span class="val">"{{searchVal}}"</span>
				<span>相关搜索结果</span>
			</div>
			<div v-show='newResult.length === 0 && allResult.length === 0' class="noList">
				<i class="iconfont icon-maozhao"></i>
				<span>抱歉，没有找到相关视频哦~</span>
			</div>
			<div v-for="item in allResult" class="search-result_box" v-if="allResult.length">
					<div class="search-result_img">
						<img :src="item.movie_pic" alt="">
					</div>
					<div class="search-result_container">
						<div class="movie-item_title">
							<span class="name">{{item.movie_name}}</span>
							<span class="year">{{item.movie_year}}</span>
						</div>
						<div class="movie-item area-star">
							<span class="area" v-show='item.movie_country'>{{item.movie_country}}</span>
							<span class="star">主演：{{item.movie_star}}</span>
						</div>
						<div class="movie-item content" ref="contents">
							<p>简介：{{item.movie_description}}</p>
						</div>
						<div class="see">查看详情</div>
					</div>				
			</div>
			<div v-for="item in newResult" class="search-result_box" v-if="newResult.length">
					<div class="search-result_img">
						<img :src="item.movie_pic" alt="">
					</div>
					<div class="search-result_container">
						<div class="movie-item_title">
							<span class="name">{{item.movie_name}}</span>
							<span class="year">{{item.movie_year}}</span>
						</div>
						<div class="movie-item area-star">
							<span class="area" v-show='item.movie_area'>{{item.movie_area}}</span>
							<span class="star">{{item.movie_star}}</span>
						</div>
						<div class="movie-item content" ref="contents">
							<p>{{item.movie_content}}</p>
						</div>
						<div class="see">查看详情</div>
					</div>				
			</div>
		</div>
		<div class="rank">
			<div class="search-rank" :class="scrolls>1?'scroll':''">
				<div class="rank-title">热播排行</div>
				<div class="rank-tab">
					<span v-for='(value,key,index) in searchRank' 
					:class="index === idx ?'rank-active':''"
					@click="idx = index">{{key}}</span>
				</div>
				<div v-for='(value,key,index) in searchRank' v-show='index === idx ? true : false'>
					<ul>
						<li v-for='(item,index) in value' class="rank-list">
							<span class="rank-list_top" 
							:class="color[index]">{{item.movie_tops}}</span>
							<span class="rank-list_name">{{item.movie_name}}</span>
							<span class="rank-list_pnum">{{item.movie_pnum}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import {mapGetters,mapMutations} from 'vuex'
	import {getData} from 'api/getData'
	import {ERR_OK} from 'api/config'
	export default{
		data(){
			return{
				idx:0,
				searchRank:{},
				color:[
					'one','two','three'
				],
				scrolls:0
			}
		},	
		computed:{
			...mapGetters([
				'newResult',
				'allResult',
				'searchVal'
				])
		},
		created(){
			this.getRank()
		},	
		mounted(){
			window.addEventListener('scroll',this.scrollRank)
		},
		methods:{
			getRank(){
				let url = 'api/topclass'
				getData(url).then((res)=>{
					if(res.code === ERR_OK){
						this.searchRank = res.data
					}
				},(err)=>{
					console.log(err)
				})
			},
			//获取滚动的高度，实现当滚动条滑动时改变样式
			scrollRank(){
				var scrollt = document.documentElement.scrollTop || document.body.scrollTop
				this.scrolls = scrollt
			}
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"
	.search
		overflow: hidden
		margin-top: 64px
		&-result
			float: left
			width: 810px
			padding-left: 20px
			.noList
				width: 100%
				height: 400px
				text-align: center
				font-size: $font-size-medium-x
				padding-top: 70px
				i
					font-size: $font-size-large
			.title
				font-size: $font-size-medium
				padding: 20px 0
				border-bottom: 1px solid #666
				.val 
					color: $color-theme
					font-size:  $font-size-medium-x
			&_box
				display: flex
				flex-direction: row
				margin-top: 20px
				margin-bottom: 40px 
			&_img
				width: 160px
				height: 224px
				cursor: pointer
				img 
					width: 100%
					height: 100%
			&_container
				width: 630px
				padding-left: 30px
				.movie-item
					display: flex
					flex-direction: row
					font-size: $font-size-small
					margin-bottom: 10px
					line-height: 20px
					.area
						display: inline-block
						width: 170px
					.star
						display: inline-block
						width: 425px
						textOverflow()
				.content
					display: -webkit-box
					-webkit-box-orient: vertical
					-webkit-line-clamp: 3
					overflow: hidden
					text-overflow: ellipsis
				.see
					width: 200px
					height: 30px
					border-radius: 5px
					line-height: 30px
					text-align: center
					color: #fff
					background-color: $color-theme-d
					margin-top: 45px
					font-size: $font-size-small
					&:hover
						background-color: $color-theme
						cursor: pointer
				.movie-item_title
					margin-bottom: 15px
					cursor: pointer
					.name
						font-size: $font-size-large
						color: $color-theme
					.year
						font-size: $font-size-small
						margin-left: 3px
						color: #999
		.rank
			float: right
			.scroll
				position: fixed
				top: 64px
				right: 89.5px
			.search-rank
				width: 260px
				margin: 50px 20px 20px 10px
				.rank-title
					font-size: $font-size-large
					margin-bottom: 20px
				.rank-tab
					margin-bottom: 15px
					span 
						margin-right: 22px
						cursor: pointer
					.rank-active
						color: $color-theme
				.rank-list
					margin-bottom: 15px
					cursor: pointer
					position: relative
					font-size: $font-size-small
					&:hover
						color: $color-theme
					&_top
						display: inline-block
						width: 21px
						height: 21px
						border-radius: 2px
						color: #fff
						text-align: center
						line-height: 21px
						background-color: #aaa
						
					.one
						background-color: #EC2E22
					.two 
						background-color: #FC7204
					.three
						background-color: #FDBC02
					.rank-list_name
						textOverflow()
					.rank-list_pnum
						position: absolute		
						right: 0	
						color: #aaa
	@media (max-width: 1170px)
		.search
			&-rank
				display: none
	@media (max-width: 790px)	
		.search
			&-result
				width: 100%
				padding-left: 10px
				padding-right: 10px
				&_container
					padding-left: 15px	
					.movie-item_title
						.name 
							font-size: $font-size-medium
				&_img
					width: 20%
					height: 200px
				&_container
					width: 80%
	@media (max-width: 767px)
		.search
			margin-bottom: 30px
			&-result
				width: 100%
				overflow: hidden
				padding-left: 5px
				padding-right: 5px
				&_box
					margin-bottom: 30px
				&_img
					width: 32%
					height: 180px
				&_container
					width: 68%
					.movie-item_title
						margin-top: 5px
						margin-bottom: 30px
					.content
						display: none
					.area-star
						display: flex
						flex-direction: column
						.area
							margin-bottom: 10px
						.star
							width: 100%
							textOverflow()
	@media (max-width: 376px)
		.search
			&-result
				width: 100%
				padding-left: 3px
				padding-right: 0px
				&_img
					width: 32%
					height: 160px
				&_container
					.movie-item_title
						margin-bottom: 25px
					.see 
						width: 120px
						margin-top: 30px

	@media (max-width: 321px)
		.search
			&-result
				width: 100%
				padding-left: 3px
				padding-right: 0px
				&_img
					width: 35%
					height: 160px
				&_container
					padding-left: 8px
					.movie-item_title
						margin-bottom: 25px
					.see 
						width: 120px
						margin-top: 30px



</style>