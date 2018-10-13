<template>
	<div class="new-movie">
		<common-list v-if='commonList.length'></common-list>
		<div class="container alert" v-if='commonList.length===0'>
		<i class="iconfont icon-maozhao"></i>
		没有更多新电影了哦~</div>
		<div class="m-pages container">
			<ul class="pages">
				<li @click='prevOn'><</li>
				<li>{{pages}}</li>
				<li @click="nextOn">></li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {mapGetters,mapMutations} from 'vuex'
	import CommonList from 'common/common-list/common-list'
	import {getData} from 'api/getData'
	import {ERR_OK} from 'api/config'
	export default{
		data(){
			return{
				pages:1
			}
		},
		computed:{
			...mapGetters([
					'commonList'
				])
		},
		components:{
			CommonList
		},
		created(){
			this.getNewMovie()
		},
		methods:{
			getNewMovie(){
				let url='api/getnewmovies'+'?'+'pagno='+this.pages
				getData(url).then((res)=>{
					if(res.code === ERR_OK){
						this.setMovieList(res.data)
					}
				},(err)=>{
					console.log(err)
				})
			},
			prevOn(event){
				this.pages = this.pages - 1
				if(this.pages < 1){
					this.pages = 1
				}
				this.getNewMovie()
				window.scrollTo(0,0)
			},
			nextOn(){
				this.pages = this.pages + 1
				this.getNewMovie()
				if(this.commonList.length === 0){
					this.pages = 1
					this.getNewMovie()
					window.scrollTo(0,0)
				}
				window.scrollTo(0,0)
			},
			...mapMutations({
				setMovieList:'SET_COMMON_LIST'
			})
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/css/stylus/variable"
	.new-movie
		margin-top: 80px
		.m-pages
			padding-bottom: 20px
			.pages
				width: 102px
				display: flex
				flex-direction: row 
				margin: 0 auto
				li 
					background-color: $color-background
					width: 34px
					height: 34px
					border: 1px solid $color-highlight-background 
					text-align: center
					line-height: 32px
					&:hover
						border: 1px solid $color-theme-d
						cursor: pointer 
				.active
					background-color: $color-theme-d
		.alert
			text-align: center
			height: 500px
			font-size: $font-size-large
			padding: 50px
			.icon-maozhao
				font-size: $font-size-large-x
	@media (max-width: 767px)
		.new-movie
			margin-top: 55px
			.m-pages
				margin-bottom: 50px
</style>
