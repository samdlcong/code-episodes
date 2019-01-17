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
                <div class="swiper-pagination" ref="pagination"></div>
                
            </div>
            <!-- 快讯 -->
            <div class="announcement">
                <label for="">快讯</label>
                <span>{{ announcement }}</span>
            </div>
        </div>
        <div class="section">
            <!-- 新书上架 -->
            <div class="book-list">
                <div class="header">
                    <div class="heading">最新更新</div>
                    <div class="more">更多...</div>
                </div>
                <div class="book-items">
                    <div class="book">
                        <div class="cover"><img src="/static/covers/1.svg" alt=""></div>
                        <div class="title">揭开数据真相: 从小白到数据分析达人</div>
                        <div class="authors">Edward Zaccaro, Daniel Zaccaro</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="/static/covers/2.svg" alt=""></div>
                        <div class="title">Android 高级进阶</div>
                        <div class="authors">顾浩鑫</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="/static/covers/3.svg" alt=""></div>
                        <div class="title">淘宝天猫电商运营与数据化选品完全手册</div>
                        <div class="authors">老夏</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="/static/covers/4.svg" alt=""></div>
                        <div class="title">大数据架构详解：从数据获取到深度学习</div>
                        <div class="authors">朱洁,罗华霖</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="/static/covers/5.svg" alt=""></div>
                        <div class="title">Meteor 全栈开发</div>
                        <div class="authors">杜亦舒</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="/static/covers/6.svg" alt=""></div>
                        <div class="title">Kubernetes 权威指南：从 Docker 到 KUbernetes 实践全接触（第2版）</div>
                        <div class="authors">龚正,吴志辉,王伟,崔秀龙,闫键勇</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <!-- 编辑推荐 -->
            <div class="book-list">
                <div class="header">
                    <div class="heading">编辑推荐</div>
                    <div class="more">更多...</div>
                </div>
                <div class="book-items">
                    <div class="book">
                        <div class="cover"><img src="/static/covers/1.svg" alt=""></div>
                        <div class="title">自己动手做大数据系统</div>
                        <div class="authors">张粤磊</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="/static/covers/2.svg" alt=""></div>
                        <div class="title">智能硬件安全</div>
                        <div class="authors">刘健皓</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="/static/covers/3.svg" alt=""></div>
                        <div class="title">实战数据库营销——大数据时代轻松赚钱之道</div>
                        <div class="authors">罗安林</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="/static/covers/4.svg" alt=""></div>
                        <div class="title">大数据架构详解：从数据获取到深度学习</div>
                        <div class="authors">朱洁,罗华霖</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="/static/covers/5.svg" alt=""></div>
                        <div class="title">Meteor 全栈开发</div>
                        <div class="authors">杜亦舒</div>
                    </div>
                    <div class="book">
                        <div class="cover"><img src="/static/covers/6.svg" alt=""></div>
                        <div class="title">Kubernetes 权威指南：从 Docker 到 KUbernetes 实践全接触（第2版）</div>
                        <div class="authors">龚正,吴志辉,王伟,崔秀龙,闫键勇</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less">
    .announcement {
        font-size: 12px;
        padding:5px;
        background:#fff;
    }

    .announcement > label {
        padding: 3px 10px;
        margin: 3px 10px;
        background: #FACCB7;
        border-radius: 3px;
        color: #FF5102;

    }

    .announcement > span {
        padding: 3px 10px;
        color: #333;
        display:inline-block;
    }
    .book-list {
  margin: 0 14px;
  & > .header {
    display: table;
    width: 100%;
    border-bottom: 1px solid #efefef;

    & > .heading {
      display: table-cell;
      padding: 12px;
    }

    & > .more {
      display: table-cell;
      text-align: right;
      vertical-align: middle;
      font-size: 10px;
      color: #cccccc;
      padding-right: 14px;
    }
  }

  & .book-items {
    display: table;
    width: 100%;
    padding-top: 12px;
  }

  & .book {
    font-size: 10px;
    text-align: center;
    float: left;
    width: 33%;
    margin: 12px auto;
    & .cover {
    }

    & .title, & .authors {
      margin: 5px auto;
      width: 100px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    & .authors {
      color: #898989;
      margin-top: 10px;
      text-align: left;
    }
  }
}
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
                // pagination: this.$refs.pagination,
                // paginationClickable: true,
                // spaceBetween: 30,
                // centeredSlides: true,
                // loop:true,
                // autoplay: 2500,
                // autoplayDisableOnInteraction: false
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
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


