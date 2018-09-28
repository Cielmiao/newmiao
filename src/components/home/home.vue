<template>
	<div>
		<home-swiper></home-swiper>
		<home-rank></home-rank>
		<home-list></home-list>	

	</div>
</template>
<script>
	import HomeSwiper from 'components/home/pages/home-swiper/home-swiper' 
	import HomeRank from 'components/home/pages/home-rank/home-rank'
	import HomeList from 'components/home/pages/home-list/home-list'
	export default{
		components:{
			HomeSwiper,
			HomeRank,
			HomeList
		}
	}
		
</script>