import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import LazyLoad from "vue-lazyload"

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

/* 解决移动端300ms延时 */
FastClick.attach(document.body)

/* 使用图片懒加载 */
Vue.use(LazyLoad,{
  error:require("@/assets/img/loading.png"),
  loading:require("@/assets/img/loading.png")
})

/* 使用字体图标 */
import "@/assets/icon-font/iconfont.css"
import "@/assets/css/base.css";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

