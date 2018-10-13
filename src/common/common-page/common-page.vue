<template>
	<div class="container">
		<div class="m-pages" ref="page" v-show="maxPage===''?false:true">
			<ul class="pages" :style="{width:(pages.length+2)*34+'px'}">
				<li @click='prevon()'><</li>
				<li v-for="item in pages" 
				@click='toCurrentPage(item)'
				:class="currentPage === item?'active':''">{{item}}</li>
				<li @click='nexton()'>></li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex' 
	export default{
		computed:{
			pages(){
				let max = this.maxPage
				let cur = this.currentPage
				let page = []
				if(max <= 5 & max > 1){
					for(let i=1;i<=max;i++){
						page.push(i)
					}
				}else{
					if(cur <= 3){
						return [1,2,3,'...',max-1+1]
					}else if(cur >= max-2){
						return [1,'...',max-2,max-1,max-1+1]
					}else{
						return [1,'...',cur-1,cur,cur+1,'...',max-1+1]
					}
				}
				return page
			},
			...mapGetters([
				'maxPage',
				'currentPage'
			])
		},
		methods:{
			//分页
	    	toCurrentPage(item){
	    		this.$emit('toCurrentPage',item)
	    	},
	    	prevon(){
	    		this.$emit('prevon')
	    	},
	    	nexton(){
	    		this.$emit('nexton')
	    	}
		}
		
	}

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/css/stylus/variable"
	.m-pages
		padding-bottom: 20px
		.pages
			display: flex
			flex-direction: row 
			margin: 0 auto
			li 
				background-color: $color-background
				width: 34px
				height: 34px
				border: 1px solid $color-highlight-background 
				text-align: center
				line-height: 32px
				&:hover
					border: 1px solid $color-theme-d
					cursor: pointer 
			.active
				background-color: $color-theme-d
	@media (max-width: 767px)
		.m-pages
			margin-bottom: 50px

</style>