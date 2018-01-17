import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import userManage from './modules/userManage'
import workSpace from './modules/workSpace'
import dataCenter from './modules/dataCenter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    userManage,
    workSpace,
    dataCenter
  },
  getters
})

export default store
