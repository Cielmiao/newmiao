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
				tvTab:[]
			}
		},
		components:{
			CommonDetails
		},
		created(){
			this.getTvTab()
			this.setTvTab(this.tvTab)
		},
		methods:{
			getTvTab(){
				let url = 'getTvtab'
				//获取分类数据
				getTab(url,this.tvTab)
			},

			...mapMutations({
				setTvTab:'SET_COMMON_TAB'
			})
		}
	}
</script>