<!--/Home.vue-->
<template>
    <div>
        <div class="section">
            <div class="swiper-container" ref="slider">
                <!--热门推荐 -->
                <div class="swiper-wrapper" v-for="slide in slides" :key='slide.id'>
                    <div class="swiper-slider" >
                        <img :src="slide.img_url" alt="">
                    </div>
                </div>
                <!-- <div class="swiper-wrapper">
                    <div class="swiper-slider">
                        <img src="./fixtures/sliders/t2.svg" alt="">
                    </div>
                </div> -->
                <div class="swiper-pagination" ref="pagination">

                </div>
               
                <!-- 快讯 -->
            </div>
        </div>
        <div class="section">
            <!-- 新书上架 -->
        </div>
        <div class="section">
            <!-- 编辑推荐 -->
        </div>
    </div>
</template>
<style>

</style>
<script>
import Swiper from "swiper"
// import '/static/swiper/dist/css/swiper.css'
export default {
    data(){
        return {
            slides:[
                {id:1, img_url:'/static/image/t1.svg'},
                {id:2, img_url:'/static/image/t2.svg'}
            ]
        }
    },
    mounted() {
        // new Swiper(this.$refs.slider, {
        //     pagination: this.$refs.pagination,
        //     paginationClickable: true,
        //     spaceBetween: 30,
        //     centeredSlides:true,
        //     autoplay: 2500,
        //     autoplayDisableOnInteraction: false
        // })
        new Swiper(this.$refs.slider, {
                pagination: this.$refs.pagination,
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            })
    }
}
</script>
<style>
/* @import '/static/swiper/dist/css/swiper.css'; */

</style>


