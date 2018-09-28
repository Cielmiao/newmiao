<template>
	<div class="m-details container">
		<div class="m-details_box">
			<ul>
				<li class="m-details_items" v-for="item in myList">
					<div class="m-details_items-box">
						<div class="details-items_img">
							<img src="../../assets/image/1.jpg" alt="">
							<span class="sub_title">{{item.sub_class}}</span>
						</div>
						<span class="details-items_name">
							<a href="">{{item.video_name}}</a>
							<span class="actor_name">{{item.actor_name}}</span>
						</span>
					</div>
					
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default{
		
		data(){
			return{
				myList:[
					{
						pic_src:'../../assets/image/1.jpg',
						sub_class:'网友求片',
						video_name: '与神同行',
						actor_name: '主演:刘昊然，victor,niajaoaoaoaoao'
					},
					{
						pic_src:'../../assets/image/1.jpg',
						sub_class:'网友求片',
						video_name: '与神同行',
						actor_name: '主演:刘昊然，victor'
					},
					{
						pic_src:'../../assets/image/1.jpg',
						sub_class:'网友求片',
						video_name: '与神同行',
						actor_name: '主演:刘昊然，victor'
					},
					{
						pic_src:'../../assets/image/1.jpg',
						sub_class:'网友求片',
						video_name: '与神同行',
						actor_name: '主演:刘昊然，victor'
					},
					{
						pic_src:'../../assets/image/1.jpg',
						sub_class:'网友求片',
						video_name: '与神同行',
						actor_name: '主演:刘昊然，victor'
					},
					{
						pic_src:'../../assets/image/1.jpg',
						sub_class:'网友求片',
						video_name: '与神同行',
						actor_name: '主演:刘昊然，victor'
					},
					{
						pic_src:'../../assets/image/1.jpg',
						sub_class:'网友求片',
						video_name: '与神同行',
						actor_name: '主演:刘昊然，victor'
					}
				]
			}
		},
		computed:{
		...mapGetters([
				'commonList'
			])
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
					padding: 0 5px
					margin: 10px 0
					&-box
						width: 100%
						
						.details-items_img
							position: relative
							width: 100%
							img 
								width: 100%
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
							.actor_name
								textOverflow()
								width: 100%
								font-size: $font-size-small
								margin-top: 10px
								color: $color-dialog-text

		@media (max-width: 992px)
			.m-details
				&_box
					ul 
						.m-details_items
							width: 25%
		@media (max-width: 676px)
			.m-details
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


				

</style>