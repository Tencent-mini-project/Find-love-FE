import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from './store/index'
import Login from './Login'
/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(VueRouter)
new Vue({
  el: 'body',
  components: { Login },
  store
})


