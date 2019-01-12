import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Cart from '@/Cart'
import Category from '@/Category'
import Me from '@/Me'
import Main from '../MainContent'
import BookDetail from '@/BookDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      name: 'Main',
      path: '/',
      component: Main,
      children: [
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
    },
    {
      path: '/books/:id',
      name: 'BookDetail',
      component: BookDetail
    }
  ]
})
