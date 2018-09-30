<template>
	<div class="home-swiper">
		<div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="slide in swiperSlides">
            <a>
                <img :src="slide.pic_src">
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev swiper-button"></div><!--左箭头-->
    	<div class="swiper-button-next swiper-button"></div><!--右箭头-->
      </div>
	</div>
</template>
<script>
import {getData} from 'api/getData'
import {ERR_OK} from 'api/config'
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default{
	data(){
		return{
			swiperSlides:[]
		}
	},
	created(){
		this.getTopList()
		
	},
	methods:{
		getTopList(){
			let url = 'getTopSlider'
				getData(url).then((res)=>{
					if (res.code === ERR_OK){
						let _res = res.data
						this.swiperSlides = _res
						this.$nextTick(()=>{
			            	this.initSwiper()
			            	})	
					}
				},(err)=>{
					console.log(err)
				})
					
	},
		initSwiper() {
        if (this.swiper != null) return;
        this.swiper = new Swiper('.swiper-container', {
          loop: true,
          speed: 900,
          autoplay: {
            delay: 3000, //3秒切换一次
            disableOnInteraction: false
          },
          observer: true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,//修改swiper的父元素时，自动初始化swiper
          navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
          pagination: {
            el: '.swiper-pagination',
            // dynamicBullets: true,
          }
        });
      }
	}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.home-swiper
		width: 100%
		height: 0
		padding-bottom: 23%
		.swiper-container
			width:100%
			a
				width: 100%
				img
					width: 100%
	@media (max-width: 768px)
		.swiper-button
			display: none
		

</style>