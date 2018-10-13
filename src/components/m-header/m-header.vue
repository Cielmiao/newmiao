<template>
	<div class="header">
		<div class="header-container container">
			<div class="header-container-logo">
				<a href="">
					<img :src="logo" alt="">
				</a>
			</div>
			<nav class="header-container-nav">
				<ul>
					<router-link tag="li" class="link" to="/Home">
						<span class="tab-link" @click='reload'>首页</span>
					</router-link>
					<router-link tag="li" class="link" to="/Movie">
						<span class="tab-link" @click='reload'>电影</span>
					</router-link>
					<router-link tag="li" class="link" to="/Tv">
						<span class="tab-link" @click='reload'>电视剧</span>
					</router-link>
					<router-link tag="li" class="link" to="/Variety">
						<span class="tab-link" @click='reload'>综艺</span>
					</router-link>
					<router-link tag="li" class="link" to="/Member">
						<span class="tab-link" @click='reload'>个人中心</span>
					</router-link>
				</ul>
			</nav>
			<div class="header-container-login" @click="toLogin">
				<i class="iconfont icon-gerenzhongxin2"></i>
				<span>立即登录</span>
			</div>
			<div class="header-container-search">
				<input class="search-input" type="text" placeholder="请输入影片关键词" v-model="val">
				<span class="search-icon" @click="toSearch">
					<i class="iconfont icon-search"></i>
				</span>
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
				val:'',
				result:[]
			}
		},
		props:{
			logo:{
				type:String,
				default:''
			}
		},
		computed:{
			...mapGetters([
					'searchVal'
				])
		},
		methods:{
			toSearch(){
				this.getSearch()
			},
			toLogin(){
				this.$router.push('/Login')
			},
			//刷新页面
			reload(){
				window.location.reload()
			},
			//搜索
			getSearch(){
				this.setSearchVal(this.val)
				if(this.val !== ''){
					this.setAllResult([])
					this.setNewResult([])
					let url = 'api/search360'+'?'+'kw='+this.val
					let _url = 'api/searchcj'+'?'+'kw='+this.val
					getData(_url).then((res)=>{
						console.log(GetNetworkTime())
						if(res.code === ERR_OK){
							this.setAllResult(res.data)
						}
					},(err)=>{
						console.log(err)
					})
					getData(url).then((res)=>{
						if(res.code === ERR_OK){
							this.setNewResult(res.data)
						}
					},(err)=>{
						console.log(err)
					})
					this.$router.push('/Search')
				}
			},
			...mapMutations({
				setNewResult:'SET_NEW_RESULT',
				setAllResult:'SET_ALL_RESULT',
				setSearchVal:'SET_SEARCH_VAL'
			})
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"
	.header
		position: fixed
		top: 0
		left: 0
		right: 0
		z-index: 10
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
					cursor: pointer 
					&:hover
						color: $color-theme

	@media (max-width: 992px)
		.header-container
			&-nav
				width: 50%
			&-search
				width: 30%
				padding-left: 0
				padding-right: 10px
				.search-icon
					right: 14px
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
			position: fixed
			left: 0
			right: 0
			top: 0
			z-index: 3
			width: 100%
			height: 60px
			padding: 0 10px 0 10px
			&-logo,&-nav,&-login
				display: none
			&-search
				width: 100%
				padding-right: 0

			

</style>