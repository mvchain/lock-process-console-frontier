import request from '@/utils/request'

export function getUserList(data) {
  return request({
    url: '/admin/user/page' + data,
    method: 'get'
  })
}
export function addUser(data) {
  return request({
    url: '/admin/user/create',
    method: 'post',
    data
  })
}
export function updateUser(data) {
  return request({
    url: '/admin/user/' + data.id,
    method: 'put',
    data
  })
}
