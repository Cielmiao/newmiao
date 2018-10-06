<template>
	<div class="m-details container">
		<div class="m-details_box">
			<ul>
				<li class="m-details_items" v-for="items in commonList">
					<div class="m-details_items-box">
						<div class="details-items_img">
							<img :src="items.movie_pic">
							<span class="sub_title" 
							v-text = "items.movie_year" 
							v-show = "items.movie_year"></span>
						</div>
						<span class="details-items_name">
							<a href="">{{items.movie_name}}</a>
							<span class="actor_name">{{items.movie_star}}</span>
						</span>
					</div>	
				</li>
			</ul>
		</div>
		<div class="m-pages" ref="page" v-show="maxPage===''?false:true">
			<ul class="pages">
				<li @click='prevon()'><</li>
				<li v-for="item in pages" 
				@click='toCurrentPage(item)'
				:class="currentPage === item?'active':''">{{item}}</li>
				<li @click='nexton()'>></li>
			</ul>
		</div>
	</div>
</template>
<script>[]

	import {mapGetters} from 'vuex' 
	import MPages from 'common/m-pages/m-pages'
	export default{	
		data(){
			return{
				forPage:[]
			}
		},
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
					return [1,2,3,4,5,'...',max]
				}else if(cur >= max-2){
					return [1,'...',max-4,max-3,max-2,max-1,max]
				}else{
					return [1,'...',cur-2,cur-1,cur,cur+1,cur+2,'...',max]
				}
			}
			return page
		},
		...mapGetters([
				'commonList',
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
		.m-details_box
			width: 100%
			padding: 10px 20px
			overflow: hidden
			ul 
				width: 100%
				.m-details_items
					width: 16.666%
					float: left
					padding: 0 8px
					margin: 10px 0
					&-box
						width: 100%
						
						.details-items_img
							position: relative
							width: 100%
							height: 246px
							img 
								width: 100%
								height: 100%
							.sub_title
								padding: 5px
								background-color: #1A9CD6
								font-size: 12px
								color: #fff
								position: absolute
								top: 8px
								left: -5px
								&:before
									content: ""
									border-top: 4px solid #09BB07
									border-left: 4px solid transparent
									position: absolute
									left: 1px
									bottom: -4px			
						.details-items_name
							textOverflow()
							width: 100%
							display: flex
							flex-direction: column
							padding: 20px 0
							a 
								textOverflow()
							.actor_name
								textOverflow()
								width: 100%
								font-size: $font-size-small
								margin-top: 10px
								color: $color-dialog-text
		.m-pages
			width: 306px
			margin: 0 auto
			.pages
				display: flex
				flex-direction: row 
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


		@media (max-width: 992px)
			.m-details
				&_box
					ul 
						.m-details_items
							width: 25%
		@media (max-width: 767px)
			.m-details
				margin-bottom: 60px
				&_box
					padding: 5px 0
					ul 
						.m-details_items
							width: 33.333%
							&-box
								.details-items_name
									text-align: center
									padding: 10px 0
									.actor_name
										display: none
								.details-items_img
									height: 210px


				

</style>