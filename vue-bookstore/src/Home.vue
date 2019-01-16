<!--/Home.vue-->
<template>
    <div>
        <div class="section">
            <div class="swiper-container" ref="slider">
                <!--热门推荐 -->
                <div class="swiper-wrapper" >
                    <div class="swiper-slide" v-for="slide in slides" :key='slide.id' >
                        <img :src="slide.img_url" alt="">
                    </div>
                </div>
                <!-- <div class="swiper-wrapper">
                    <div class="swiper-slider">
                        <img src="./fixtures/sliders/t2.svg" alt="">
                    </div>
                </div> -->
                <div class="swiper-pagination" ref="pagination"></div>
               
                <!-- 快讯 -->
                <div class="announcement">
                    <label for="">快讯</label>
                    <span>{{ announcement }}</span>
                </div>
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
import 'swiper/dist/css/swiper.css'
export default {
    data(){
        return {
            announcement: '今日上架图书全部8折',
            slides:[
                {id:1, img_url:'/static/image/t1.svg'},
                {id:2, img_url:'/static/image/t2.svg'}
            ]
        }
    },
    mounted() {
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
    .swiper-container {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .swiper-wrapper {
        height: 200px;
    }

    .swiper-slide img {
        max-width: 100%;
    }

    .swiper-slide {
        text-align: center;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>


