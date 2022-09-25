import Vue from 'vue'
import App from './App.vue'
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import router from './router/index';
Vue.config.productionTip = false
import store from './store/index';
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
