import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Category from '@/components/Category'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
