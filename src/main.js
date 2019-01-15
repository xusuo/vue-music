import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueLazyLoad from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import 'common/stylus/index.styl'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(vueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
