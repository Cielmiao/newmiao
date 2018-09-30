<template>
	<div class="details-top container"> 
		<div class="details-top_box">
			<div class="details-top_item" v-for="item in commonTab">
				<h3>{{item.name}}</h3>
				<ul>
					<li v-for="list in item.tab" class="top-list">
						<a href="">{{list.tab}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="phone-top">
			<div>
				<span v-for="(item,index) in commonTab" class="phone-top_item" :class="index == idx ? 'active' : ''" @click='idx = index'>{{item.name}}</span>
			</div>
			<div v-for="(list,index) in commonTab" class="list-box" v-show="idx == index ? true : false">
				<ul>
					<li v-for="item in list.tab" class="phone-list">{{item.tab}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			commonTab:{
				type:Array,
				default: []
			}
		},
		data(){
			return {
				idx:0,
				items:[
					{
						title:"按剧情",
						list:['爱情','爱情','爱情','爱情','爱情','爱情','爱情','爱情','爱情','爱情']
					},
					{
						title:"按时间",
						list:['动作','爱情','爱情','爱情','爱情','爱情','爱情','爱情','爱情','爱情']
					},
					{
						title:"按剧情",
						list:['科幻','爱情','爱情','爱情','爱情','爱情','爱情','爱情','爱情','爱情']
					}
				]
			}
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"
	.details-top
		margin-top: 20px
		margin-bottom: 20px
		&_box
			width: 100%
		&_item
			width: 33.333%
			display: inline-block
			padding: 20px
			border-right: 1px solid rgba(255,255,255,0.1)
			&:last-child
				border-right: none
			h3
				margin-bottom: 10px
			.top-list
				float: left
				margin: 5px 10px 5px 0
				font-size: $font-size-small
		.phone-top
			display: none
			&_item
				padding: 5px 10px
				border-right: 1px solid rgba(255,255,255,0.2)
				border-bottom: 1px solid rgba(255,255,255,0.2)
			.active
				border-bottom: 1px solid rgba(255,255,255,0)
			.list-box
				margin-top: 10px
				margin-left: 5px
				.phone-list
					margin: 5px
					float: left
	@media (max-width: 767px)
		.details-top
			.phone-top
				display: block
			&_box
				display: none


	
</style>