import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)
const state = {
  strict: process.env.NODE_ENV !== 'production',
  isSend: false,
  counttime: 0
}
export default new Vuex.Store({
  state,
  mutations
})
