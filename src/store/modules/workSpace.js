import { batchTransfer, bathAll, saveConfig, transactions, lockRecord } from '@/api/workSpace'

const space = {
  state: {
    configData: [],
    transactionData: [],
    lockRecordData: []
  },

  mutations: {
    SET_CONFIG_DATA: (state, payload) => {
      state.configData = payload
    },
    SET_TRANSACTION_DATA: (state, payload) => {
      state.transactionData = payload
    },
    SET_LOCK_RECORD: (state, payload) => {
      state.lockRecordData = payload
    }
  },

  actions: {
    // 登出
    getBatchTransfer({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        batchTransfer(payload).then(() => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getBathAll({ commit, state }) {
      return new Promise((resolve, reject) => {
        bathAll().then((res) => {
          commit('SET_CONFIG_DATA', res.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getConfigSave({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        saveConfig(payload).then((res) => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getTransactions({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        transactions(payload).then((res) => {
          commit('SET_TRANSACTION_DATA', res.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getLockRecord({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        lockRecord(payload).then((res) => {
          commit('SET_LOCK_RECORD', res.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default space
