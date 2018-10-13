<template>
	<div class="details-top container"> 
		<div class="details-top_box" v-if="commonTab.length">
			<div class="details-top_item">
				<h3>{{commonTab[0].name}}</h3>
				<ul>
					<li class="top-list" 
					v-for="(list,index) in commonTab[0].tab" 
					:key='index' 
					:class="index === idxOne ? 'colorActive' : ''"
					@click="toTabOne(list,index)">
						<span >{{list.tab}}</span>
					</li>
				</ul>
			</div>
			<div class="details-top_item">
				<h3>{{commonTab[1].name}}</h3>
				<ul>
					<li class="top-list" 
					v-for="(list,index) in commonTab[1].tab" 
					:key='index' 
					:class="index === idxTwo ? 'colorActive' : ''"
					@click="toTabTwo(list,index)">
						<span >{{list.tab}}</span>
					</li>
				</ul>
			</div>
			<div class="details-top_item">
				<h3>{{commonTab[2].name}}</h3>
				<ul>
					<li class="top-list" 
					v-for="(list,index) in commonTab[2].tab" 
					:key='index' 
					:class="index === idxThree ? 'colorActive' : ''"
					@click="toTabThree(list,index)">
						<span >{{list.tab}}</span>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default{
		data(){
			return {
				idxOne:0,
				idxTwo:0,
				idxThree:0,
			}
		},
		computed:{
		...mapGetters([
				'commonTab',
			])
	    },
		methods:{
			toTabOne(list,index){
				this.idxOne = index
				this.$emit('toTabOne',list)
			},
			toTabTwo(list,index){
				this.idxTwo = index
				this.$emit('toTabTwo',list)
			},
			toTabThree(list,index){
				this.idxThree = index
				this.$emit('toTabThree',list)
			},
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"
	.details-top
		margin-top: 84px
		margin-bottom: 20px
		height: 160px
		&_box
			width: 100%
		&_item
			width: 33%
			height: 138px
			float: left
			padding: 20px
			border-right: 1px solid rgba(255,255,255,0.1)
			&:last-child
				border-right: none
			h3
				margin-bottom: 10px
			.top-list
				display: inline-block
				margin: 5px 10px 5px 0
				font-size: $font-size-small
				&:hover
					cursor: pointer
					color: $color-theme
			.colorActive
				color: $color-theme
	@media (max-width: 769px)
		.details-top
			margin-top: 70px
			&_item
				height: 60px
				width: 100%
				padding-top: 0px
				padding-bottom: 0px
				ul
					listOverflow()
					-webkit-overflow-scrolling: touch
		

	
</style>