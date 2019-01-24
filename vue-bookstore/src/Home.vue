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
            <!-- <div class="announcement">
                <label for="">快讯</label>
                <span>{{ announcement }}</span>
            </div> -->
            <announcement :announcement="announcement" label="快讯"></announcement>
        </div>
        <div class="section">
            <!-- 新书上架 -->
            <book-list :books="latestUpdated" heading="最新更新" @onBookSelect="preview($event)">
                
            </book-list>
        </div>
        <div class="section">
            <!-- 编辑推荐 -->
            <book-list :books="recommended" heading="编辑推荐" @onBookSelect="preview($event)">

            </book-list>
           
        </div>
        <div>
        <modal-dialog ref="dialog" @dialogClose="selected=undefined">
            <div slot="heading">
                <div class="dismiss" @click.prevent="$refs.dialog.close()">关闭</div>
            </div>
            <!-- <div></div> -->
            <div>这个DIV将自动默认插槽的内容</div>
        </modal-dialog>
        </div>
    </div>    
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper"
import BookList from "./components/BookList.vue"
import Announcement from "./components/Announcement.vue"
import ModalDialog from "./components/dialog.vue"
// import faker from "./fixtures/faker"
import 'swiper/dist/css/swiper.css'
import {mapGetters,mapActions} from 'vuex'
const debug = process.env.NODE_ENV !== 'production';

export default {
    data(){
        return {
            // announcement:this.$store.getters.announcement,
            
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
        this.$store.dispatch('announcement','测试测试');
        this.$store.dispatch('slides');
        this.$store.dispatch('latestUpdated');
        this.$store.dispatch('recommended')
        
    },
    components:{
        BookList,
        Announcement,
        ModalDialog
    },
    methods:{
        preview(book){
            alert("显示图书"+book.title+"详情");
            this.selected = book;
            this.$refs.dialog.open()
        }
    },
    // created (){
    //     if (debug) {
    //         const fakeData = faker.getHomeData();
    //         console.log(fakeData);
    //         for (let prop in fakeData ){
    //             this[prop] = fakeData[prop]
    //         }
    //     } else {
    //         this.$http.get('/api/home').then((res)=>{
    //             for (let prop in res.body) {
    //                 this[prop] = res.body[prop]
    //             }
    //         },(error)=>{
    //             console.log(`获取数据失败: ${error}`)
    //         })
    //     }
    // }
    computed: {
        // ...mapGetters {
        //     ['announcement', 'slides', 'latestUpdated', 'recommended']
        // }
        
        announcement(){
            return this.$store.getters.announcement
        },

        slides(){
            return this.$store.getters.slides
        },

        latestUpdated() {
            return this.$store.getters.latestUpdated
        },

        recommended() {
            return this.$store.getters.recommended
        }
       
    },

    
    
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


