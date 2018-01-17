import { getData } from '@/api/dataCenter'

const manage = {
  state: {
    dataList: {}
  },

  mutations: {
    SET_DATA_LIST: (state, payload) => {
      state.dataList = payload
    }
  },

  actions: {
    // 登出
    getDataList({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        getData(payload).then((res) => {
          commit('SET_DATA_LIST', res.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default manage
