<template>
	<div>
		<details-top :commonTab="commonTab"></details-top>
		<common-list></common-list>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex' 
	import DetailsTop from 'common/details-top/details-top'
	import CommonList from 'common/common-list/common-list'
	export default{
		computed:{
		...mapGetters([
				'commonTab'
			])
	    },
		components:{
			DetailsTop,
			CommonList
		}
	}
</script>