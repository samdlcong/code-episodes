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
            <book-list :books="latestUpdated" heading="最新更新">
                
            </book-list>
            <!-- <div class="book-list">
                <div class="header">
                    <div class="heading">最新更新</div>
                    <div class="more">更多...</div>
                </div>
                <div class="book-items">
                    <div class="book" v-for="book in latestUpdated">
                        <div class="cover"><img :src="book.img_url|fullUrl" alt=""></div>
                        <div class="title">{{book.title}}</div>
                        <div class="authors">{{book.authors|join}}</div>
                    </div> -->
                    <!-- <div class="book">
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
                    </div> -->
                <!-- </div>
            </div> -->
        </div>
        <div class="section">
            <!-- 编辑推荐 -->
            <book-list :books="recommended" heading="编辑推荐">

            </book-list>
            <!-- <div class="book-list">
                <div class="header">
                    <div class="heading">编辑推荐</div>
                    <div class="more">更多...</div>
                </div>
                <div class="book-items">
                    <div class="book" v-for="book in recommended">
                        <div class="cover"><img :src="book.img_url|fullUrl" alt=""></div>
                        <div class="title">{{book.title}}</div>
                        <div class="authors">{{book.authors|join}}</div>
                    </div> -->
                    <!-- <div class="book">
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
                    </div> -->
                <!-- </div>
            </div> -->
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

</style>
<script>
import Swiper from "swiper"
import BookList from "./components/BookList.vue"
import 'swiper/dist/css/swiper.css'
export default {
    data(){
        return {
            announcement: '今日上架图书全部8折',
            slides:[
                {id:1, img_url:'/static/image/t1.svg'},
                {id:2, img_url:'/static/image/t2.svg'}
            ],
            latestUpdated:[
                {
                    "id": 1,
                    "title": "揭开数据真相：从小白到数据分析达人",
                    "authors": [
                        "Edward Zaccaro", "Daniel Zaccaro"
                    ],
                    "img_url": "1.svg"
                },
                {
                    "id": 2,
                    "title": "Android 高级进阶",
                    "authors": [
                        "顾浩鑫"
                    ],
                    "img_url": "2.svg"
                },
                {
                    "id": 3,
                    "title":"淘宝天猫电商运营与数据化选品完全手册",
                    "authors":[
                        "老夏"
                    ],
                    "img_url": "3.svg"
                },
                {
                    "id": 4,
                    "title":"大数据架构详解：从数据获取到深度学习",
                    "authors":[
                        "朱杰","罗华霖"
                    ],
                    "img_url": "4.svg"
                },
                {
                    "id": 5,
                    "title":"Meteor 全栈开发",
                    "authors":[
                        "杜亦舒"
                    ],
                    "img_url": "5.svg"
                },
                {
                    "id": 6,
                    "title":"Kubernetes 权威指南：从 Docker 到 Kubernetes 实践全接触（第2版）",
                    "authors":[
                        "龚正","吴志辉","王伟","崔秀龙","闫键勇"
                    ],
                    "img_url": "6.svg"
                }
            ],
            recommended:[
                {
                    "id": 1,
                    "title": "揭开数据真相：从小白到数据分析达人",
                    "authors": [
                        "Edward Zaccaro", "Daniel Zaccaro"
                    ],
                    "img_url": "1.svg"
                },
                {
                    "id": 2,
                    "title": "Android 高级进阶",
                    "authors": [
                        "顾浩鑫"
                    ],
                    "img_url": "2.svg"
                },
                {
                    "id": 3,
                    "title":"淘宝天猫电商运营与数据化选品完全手册",
                    "authors":[
                        "老夏"
                    ],
                    "img_url": "3.svg"
                },
                {
                    "id": 4,
                    "title":"大数据架构详解：从数据获取到深度学习",
                    "authors":[
                        "朱杰","罗华霖"
                    ],
                    "img_url": "4.svg"
                },
                {
                    "id": 5,
                    "title":"Meteor 全栈开发",
                    "authors":[
                        "杜亦舒"
                    ],
                    "img_url": "5.svg"
                },
                {
                    "id": 6,
                    "title":"Kubernetes 权威指南：从 Docker 到 Kubernetes 实践全接触（第2版）",
                    "authors":[
                        "龚正","吴志辉","王伟","崔秀龙","闫键勇"
                    ],
                    "img_url": "6.svg"
                }
            ]
        }
    },
    mounted() {
        new Swiper(this.$refs.slider, {
                autoplay: {
                    delay: 2500,
                },
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
        })
    },
    components:{
        BookList
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


