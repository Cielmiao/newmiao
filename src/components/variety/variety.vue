<template>
	<div>
		<common-details></common-details>
	</div>
</template>
<script>
	import {getCommonTab} from 'api/getCommonTab'
	import {getData} from 'api/getData'
	import {ERR_OK} from 'api/config'
	import {mapMutations} from 'vuex'
	import CommonDetails from 'common/common-details/common-details'
	export default{
		data(){
			return{
				varietyTab:[],
				varietyList:{}
			}
		},
		components:{
			CommonDetails
		},
		created(){
			this.getVarietyTab()
			this.setVarietyTab(this.varietyTab)
			this.getVarietyList()	
		},
		methods:{
			getVarietyTab(){
				let url = 'getZongyitab'
				//获取综艺分类
				getData(url).
				then((res)=>{
					if (res.code === ERR_OK){
					let _res = res.data
					for(let i=1;i<_res.length;i++){
						this.varietyTab.push(_res[i])
						}
						this.varietyTab[2].tab.splice(-11,11)
					console.log(this.varietyTab)
					
					}
				},(err)=>{
					console.log(err)
				})


			},
			getVarietyList(){
				let _url = 'getZongyis'
				getData(_url).
				then((res)=>{
					if (res.code === ERR_OK){
					this.varietyList = res.data
					this.setVarietyList(this.varietyList)
					console.log(this.varietyList)
					}
				},(err)=>{
					console.log(err)
				})
			},
			...mapMutations({
				setVarietyTab:'SET_COMMON_TAB',
				setVarietyList:'SET_COMMON_LIST'
			})
		}
	}
</script>