import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=>import("@/view/home/home")
const List = ()=>import("@/view/list/list")
const Cart = ()=>import("@/view/cart/cart")
const Profile = ()=>import("@/view/profile/profile")
const Detail = ()=>import("@/view/detail/detail")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/detail',
      name:'detail',
      component: Detail,
    }
  ],
  // mode:"history",
  // 当前执行脚本的绝对路径
  base:__dirname
})
