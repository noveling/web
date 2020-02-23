<template>
  <div class="carousel">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
          <swiper-slide>
            <!-- {{BannerImgs&&BannerImgs[0]&&BannerImgs[0].image}} -->
            <a :href="BannerImgs[0].link"><img :src="BannerImgs[0].image" alt=".." class="carousel-img" @load="imgLoad"></a>
          </swiper-slide>
          <swiper-slide>
            <a :href="BannerImgs[1].link"><img :src="BannerImgs[1].image" alt=".." class="carousel-img"></a>
          </swiper-slide>
          <swiper-slide>
            <a :href="BannerImgs[2].link"><img :src="BannerImgs[2].image" alt=".." class="carousel-img"></a>
          </swiper-slide>
          <swiper-slide>
            <a :href="BannerImgs[3].link"><img :src="BannerImgs[3].image" alt=".." class="carousel-img"></a>
          </swiper-slide>
          <div class="swiper-paginatio" slot="pagination"></div>
          <!-- <swiper-slide>I'm Slide 2</swiper-slide>
          <swiper-slide>I'm Slide 3</swiper-slide>
          <swiper-slide>I'm Slide 4</swiper-slide> -->
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
// 使用awesome-swiper
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data(){
    return {
      swiperOption:{
        /* 
        ***左右点击按钮
        */
        /* navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev'
           },
        */
        speed:1000,
      　autoplay:{
        delay: 2000,
        stopOnLastSlide: false,/* 触摸滑动后是否继续轮播 */
        disableOnInteraction: false
        },
        loop:true,
        resistanceRatio:0,
        pagination:{
          el:'.swiper-pagination'
        }
      }
    }
  },
  methods:{
    imgLoad(){
      this.$emit("imgLoad")
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  props:{
    BannerImgs:{
      type:Array,
      default:()=>{}
    }
  }
}
</script>

<style>
  .carousel{
    font-size:0;
  }
  .carousel-img{
    width:auto;
    height:auto;
    max-width:100%;
    max-height:100%;
    /* width:100%; */
  }
</style>
