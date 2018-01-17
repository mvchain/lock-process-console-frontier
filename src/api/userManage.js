import request from '@/utils/request'
export function pageList(data) {
  return request({
    url: '/user/list' + data,
    method: 'get'
  })
}
export function changeUser(data) {
  return request({
    url: '/user/list' + data.id,
    method: 'put',
    data
  })
}
