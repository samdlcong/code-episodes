<template>
<div>
    <div class="tabs">
      <ul>
        <li>
          <router-link :to="{name: 'Home'}" tag="div" active-class="active" exact>
            <div><img src="../assets/images/home.svg" alt=""></div>
            <div>首页</div>
          </router-link>
         </li>
         <li>
          <router-link :to="{name:'Category'}" tag="div" active-class="active">
            <div><img src="../assets/images/category.svg" alt=""></div>
            <div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Cart'}" tag="div" active-class="active">
            <div><img src="../assets/images/cart.svg" alt=""></div>
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Me'}" tag="div" active-class="active">
            <div><img src="../assets/images/me.svg" alt=""></div>
            <div>我</div>
          </router-link>
        </li>
      </ul>
    </div>
    <transition name="slide-fade">
    <div class="content">
      <router-view></router-view>
    </div>
    </transition>
</div>
</template>

<script>
//import '../assets/less/site.less';

export default {
    
}
</script>

<style>
    .slide-fade-enter-active{
        transition: all .3s ease;
    }

    .slide-fade-leave-active{
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-active{
        transform: translateX(-430px);
        opacity: 0;
    }
</style>
