// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
  // window.scrollTo(0, 0)
    next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
