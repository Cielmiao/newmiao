<template>
	<div>
		<details-top @toTabOne = 'toTabOne' 
		@toTabTwo = 'toTabTwo' 
		@toTabThree = 'toTabThree'></details-top>
		<common-list></common-list>
		<common-page @toCurrentPage='toCurrentPage'
		@prevon='prevon'
		@nexton='nexton'></common-page>
	</div>
</template>
<script>
	import {mapGetters,mapMutations} from 'vuex'
	import {getData} from 'api/getData'
	import {ERR_OK} from 'api/config'
	import DetailsTop from 'common/details-top/details-top'
	import CommonList from 'common/common-list/common-list'
	import CommonPage from 'common/common-page/common-page'
	export default{
		data(){
			return{
				varietyTab:[],
				varietyList:{},
				varietyPage:0
			}
		},
		components:{
			DetailsTop,
			CommonList,
			CommonPage
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
			this.getVarietyTab()
			//设置电影分类
			this.setVarietyTab(this.varietyTab)
			this.getVarietyList()
		},
		methods:{
			getVarietyTab(){
				let url = 'api/getZongyitab'
				//获取分类数据
				getData(url).then((res)=>{
					if(res.code === ERR_OK){
						let _res = res.data
					for(let i=1;i<_res.length;i++){
						this.varietyTab.push(_res[i])
						}
						this.varietyTab[2].tab.splice(-11,11)
					}
				})

			},
			getVarietyList(){
				let curPage = 'pageno='+this.currentPage
				let _url = 'api/getZongyis'+'?'+this.currentOne+'&'+this.currentTwo+'&'+this.currentThree+'&'+curPage
				getData(_url).
				then((res)=>{
					if (res.code === ERR_OK){
					this.varietyList = res.data.item
					this.varietyPage = res.data.max_page.max_page.split('=')[1]
					this.setVarietyList(this.varietyList)
					this.setMaxPage(this.varietyPage)
					
					}
				},(err)=>{
					console.log(err)
				})
			},
			toTabOne(list){
				this.setCurrentOne(list.param)
				this.setCurrentPage(1)
				this.getVarietyList()
			},
			toTabTwo(list){
				this.setCurrentTwo(list.param)
				this.setCurrentPage(1)
				this.getVarietyList()
			},
			toTabThree(list){
				this.setCurrentThree(list.param)
				this.setCurrentPage(1)
				this.getVarietyList()
			},
			//分页
			toCurrentPage(item){
				if (item === this.currentPage) return
				if (typeof item == 'string') return
				this.setCurrentPage(item)
				this.getVarietyList()
				window.scrollTo(0,0)
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
				this.getVarietyList()
				window.scrollTo(0,0)
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
				this.getVarietyList()
				window.scrollTo(0,0)
			},
			...mapMutations({
				setVarietyTab:'SET_COMMON_TAB',
				setVarietyList:'SET_COMMON_LIST',
				setCurrentOne:'SET_CURRENT_ONE',
				setCurrentTwo:'SET_CURRENT_TWO',
				setCurrentThree:'SET_CURRENT_THREE',
				setMaxPage:'SET_MAX_PAGE',
				setCurrentPage:'SET_CURRENT_PAGE'
			})
		}

	}
</script>