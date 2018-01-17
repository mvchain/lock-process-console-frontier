import { pageList, changeUser } from '@/api/userManage'

const manage = {
  state: {
    pageListData: {}
  },

  mutations: {
    SET_PAGE_LIST: (state, payload) => {
      state.pageListData = payload
    }
  },

  actions: {
    // 登出
    getPageList({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        pageList(payload).then((res) => {
          commit('SET_PAGE_LIST', res.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getChange({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        changeUser(payload).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default manage
