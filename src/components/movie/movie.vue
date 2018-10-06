<template>
	<div>
		<details-top @toTabOne = 'toTabOne' 
		@toTabTwo = 'toTabTwo' 
		@toTabThree = 'toTabThree'></details-top>
		<common-list @toCurrentPage='toCurrentPage'
		@prevon='prevon'
		@nexton='nexton'></common-list>
	</div>
</template>
<script>
	import {mapGetters,mapMutations} from 'vuex'
	import {getCommonTab} from 'api/getCommonTab'
	import {getData} from 'api/getData'
	import {ERR_OK} from 'api/config'
	import DetailsTop from 'common/details-top/details-top'
	import CommonList from 'common/common-list/common-list'
	export default{
		data(){
			return{
				movieTab:[],
				movieList:{},
				moviePage:0
			}
		},
		components:{
			DetailsTop,
			CommonList
		},
		computed:{
		...mapGetters([
				'commonTab',
				'commonList',
				'currentOne',
				'currentTwo',
				'currentThree',
				'maxPage',
				'currentPage'
			])
	    },
		created(){
			this.getMovieTab()
			//设置电影分类
			this.setMovieTab(this.movieTab)
			this.getMovieList()
		},
		methods:{
			getMovieTab(){
				let url = 'getMovietab'
				//获取分类数据
				getCommonTab(url,this.movieTab)
			},
			getMovieList(){
				let curPage = 'pageno='+this.currentPage
				let _url = 'getMovies'+'?'+this.currentOne+'&'+this.currentTwo+'&'+this.currentThree+'&'+curPage
				getData(_url).
				then((res)=>{
					if (res.code === ERR_OK){
					this.movieList = res.data.item
					this.moviePage = res.data.max_page.max_page.split('=')[1]
					this.setMovieList(this.movieList)
					this.setMaxPage(this.moviePage)
					
					}
				},(err)=>{
					console.log(err)
				})
			},
			toTabOne(list){
				this.setCurrentOne(list.param)
				this.getMovieList()
			},
			toTabTwo(list){
				this.setCurrentTwo(list.param)
				this.getMovieList()
			},
			toTabThree(list){
				this.setCurrentThree(list.param)
				this.getMovieList()
			},
			//分页
			toCurrentPage(item){
				if (item === this.currentPage) return
				if (typeof item == 'string') return
				this.setCurrentPage(item)
				this.getMovieList()
			},
			//上一页
			prevon(){
				this.setCurrentPage(this.currentPage-1)
				if(this.currentPage < 1){
					this.setCurrentPage(1)
				}
				if(this.currentPage > this.maxPage){
					this.setCurrentPage(this.maxPage)
				}
				this.getMovieList()
			},
			//下一页
			nexton(){
				this.setCurrentPage(this.currentPage+1)
				if(this.currentPage < 1){
					this.setCurrentPage(1)
				}
				if(this.currentPage > this.maxPage){
					this.setCurrentPage(this.maxPage)
				}
				this.getMovieList()
			},
			...mapMutations({
				setMovieTab:'SET_COMMON_TAB',
				setMovieList:'SET_COMMON_LIST',
				setCurrentOne:'SET_CURRENT_ONE',
				setCurrentTwo:'SET_CURRENT_TWO',
				setCurrentThree:'SET_CURRENT_THREE',
				setMaxPage:'SET_MAX_PAGE',
				setCurrentPage:'SET_CURRENT_PAGE'
			})
		}

	}
</script>