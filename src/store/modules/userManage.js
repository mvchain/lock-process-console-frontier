import { pageList, changeUser, postLocked } from '@/api/userManage'

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
    },
    getLockedHandler({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        postLocked(payload).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default manage
