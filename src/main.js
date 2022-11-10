import Vue from 'vue'
import App from './App.vue'
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import router from './router/index';
Vue.config.productionTip = false
import store from './store/index';

import animated from 'animate.css'
Vue.use(animated)

router.beforeEach((to, from, next) => {
  const name = localStorage.getItem('cookie');//查看本地存储上是否有name对象
  if (name || to.path === '/login') {//短路逻辑，有就可以继续执行，没有就跳转到登录页面
    next()
  } else {
    next('/login')//跳转登录页面
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
