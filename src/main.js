import Vue from 'vue'
import Login from './Login'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(VueRouter)
new Vue({
  el: 'body',
  components: { Login }
})


