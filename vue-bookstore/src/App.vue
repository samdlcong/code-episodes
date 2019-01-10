<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <li>
          <router-link :to="{name: 'Home'}">
            <div><img src="./assets/images/home.svg" alt=""></div>
            <div>首页</div>
          </router-link>
         </li>
         <li>
          <router-link :to="{name:'Explorer'}">
            <div><img src="./assets/images/category.svg" alt=""></div>
            <div>分类</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Cart'}">
            <div><img src="./assets/images/cart.svg" alt=""></div>
            <div>购物车</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'Me'}">
            <div><img src="./assets/images/me.svg" alt=""></div>
            <div>我</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import './assets/less/site.less';

export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
