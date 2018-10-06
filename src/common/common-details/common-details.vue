<template>
	<div>
		<details-top :commonTab="commonTab"></details-top>
		<common-list :commonList="commonList"></common-list>
	</div>
</template>
<script>
	import {mapGetters,mapMutations} from 'vuex' 
	import DetailsTop from 'common/details-top/details-top'
	import CommonList from 'common/common-list/common-list'
	export default{
		computed:{
		...mapGetters([
				'commonTab',
				'commonList'
			])
	    },
		components:{
			DetailsTop,
			CommonList
		}
	}
</script>