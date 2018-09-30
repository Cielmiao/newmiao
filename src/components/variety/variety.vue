<template>
	<div>
		<common-details></common-details>
	</div>
</template>
<script>
	import {getTab} from 'api/getData'
	import {mapMutations} from 'vuex'
	import CommonDetails from 'common/common-details/common-details'
	export default{
		data(){
			return{
				varietyTab:[]
			}
		},
		components:{
			CommonDetails
		},
		created(){
			this.getVarietyTab()
			this.setVarietyTab(this.varietyTab)
		},
		methods:{
			getVarietyTab(){
				let url = 'getZongyitab'
				//获取分类数据
				getTab(url,this.varietyTab)
			},

			...mapMutations({
				setVarietyTab:'SET_COMMON_TAB'
			})
		}
	}
</script>