<template>
	<div>
		<common-details></common-details>
	</div>
</template>
<script>
	import {getTab} from 'api/getData'
	import CommonDetails from 'common/common-details/common-details'
	import {mapMutations} from 'vuex'
	export default{
		data(){
			return{
				movieTab:[]
			}
		},
		components:{
			CommonDetails
		},
		created(){
			this.getMovieTab()
			//设置电影分类
			this.setMovieTab(this.movieTab)
		},
		methods:{
			getMovieTab(){
				let url = 'getMovietab'
				//获取分类数据
				getTab(url,this.movieTab)
			},

			...mapMutations({
				setMovieTab:'SET_COMMON_TAB'
			})
		}
	}
</script>