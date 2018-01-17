const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  userList: state => state.app.userList,
  pageListData: state => state.userManage.pageListData,
  configData: state => state.workSpace.configData,
  transactionData: state => state.workSpace.transactionData,
  lockRecordData: state => state.workSpace.lockRecordData,
  dataList: state => state.dataCenter.dataList
}
export default getters
