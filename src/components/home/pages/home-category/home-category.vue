<template>
	<div class="home-category container">
		<div class="home-category_pc">
			<div class="category-items" v-for="item in iconList">
				<div class="category-items_icon">
					<i class="iconfont" :class="item.icon"></i>
					<span>{{item.txt}}</span>
				</div>
				<div class="category-items_title">
					<ul>
						<li v-for="list in titleList" class="category-items_list">
							<a href="">{{list}}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<phone-category :iconList="iconList" :titleList="titleList"></phone-category>
	</div>  
</template>
 
<script>
  import PhoneCategory from 'phone/phone-category/phone-category'
  export default {
    data() {
      return {
        swiperOption: {
          notNextTick:true,
          autoplay:true,
          loop:true,
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [],
        iconList:[
          {
            icon:"icon-live",
            txt:"电影"
          },
          {
            icon:"icon-VIP",
            txt:"抢先片源"
          },
          {
            icon:"icon-tv",
            txt:"电视剧"
          },
          {
            icon:"icon-shipin",
            txt:"综艺"
          },
        ],
        titleList:[
          "爱情","动作","恐怖","科幻","剧情","犯罪","奇幻","战争","爱情","动作","恐怖","科幻","剧情","犯罪","奇幻","战争","爱情","动作","恐怖","科幻","剧情","犯罪","奇幻","战争","爱情"
        ],
        phoneTitle:["爱情","动作","恐怖","科幻","剧情","犯罪"]
      }
    },
    components:{
    	PhoneCategory
    }
    
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"

	.home-category
		margin: 40px auto
		&_pc
			padding-top: 20px
			width: 100%
			display: flex
			flex-direction: row 
			flex-wrap: wrap 
			.category-items
				display: flex
				flex-direction: row 
				width: 50%
				&_icon
					width: 200px
					height: 100px
					display: flex
					flex-direction: column 
					align-items: center
					justify-content: center
					font-size: $font-size-medium
					&:hover
						cursor: pointer 
						color: #fff
					i 
						font-size: $font-size-large-x
						margin-bottom: 5px
						color: $color-theme
				&_list
					float: left
					margin: 8px
					font-size: $font-size-small
					a:hover
						color: $color-theme
	@media (max-width: 992px)
		.home-category
			margin-top: 20px
			margin-bottom: 20px
			&_pc
				height: 0
				overflow: hidden
				padding-top: 0

</style>