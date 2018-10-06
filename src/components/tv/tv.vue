<template>
	<div>
		<common-details></common-details>
	</div>
</template>
<script>
	import {getCommonTab} from 'api/getCommonTab'
	import {getData} from 'api/getData'
	import {ERR_OK} from 'api/config'
	import CommonDetails from 'common/common-details/common-details'
	import {mapMutations} from 'vuex'
	export default{
		data(){
			return{
				tvTab:[],
				tvList:{}
			}
		},
		components:{
			CommonDetails
		},
		created(){
			this.getTvTab()
			this.setTvTab(this.tvTab)
			this.getTvList()
			
		},
		methods:{
			getTvTab(){
				let url = 'getTvtab'
				//获取分类数据
				getCommonTab(url,this.tvTab)
			},
			getTvList(){
				let _url = 'getTvs'
				getData(_url).
				then((res)=>{
					if (res.code === ERR_OK){
					this.tvList = res.data
					this.setTvList(this.tvList)
					console.log(this.tvList)
					}
				},(err)=>{
					console.log(err)
				})
			},

			...mapMutations({
				setTvTab:'SET_COMMON_TAB',
				setTvList:'SET_COMMON_LIST'
			})
		}
	}
</script>