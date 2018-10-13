<template>
	<div class="m-footer">
		<p>{{copyright}}</p>
	</div>
</template>
<script>
	export default{
		props:{
			copyright:{
				type:String,
				default:''
			}
		}
	}
</script>
<style scoped>
	.m-footer{
		position: relative;
		bottom: 0px;
		width: 100%;
		height: 100px;
		background-color: #000;
		text-align: center;
		line-height: 100px;
		color: #888;
	}
	@media (max-width: 767px){
		.m-footer{
			display: none;
		}
	}

</style>