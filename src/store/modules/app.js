import Cookies from 'js-cookie'
import { getUserList, addUser, updateUser } from '@/api/backSetting'
const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    userList: {}
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
    },
    SET_USER_LIST: (state, userList) => {
      state.userList = userList
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    getUserList: ({ commit, state }, payload) => {
      return new Promise((resolve, reject) => {
        getUserList(payload).then(res => {
          commit('SET_USER_LIST', res.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    setUserList: ({ commit, state }, payload) => {
      return new Promise((resolve, reject) => {
        addUser(payload).then(res => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateUser: ({ commit, state }, payload) => {
      return new Promise((resolve, reject) => {
        updateUser(payload).then(res => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default app
