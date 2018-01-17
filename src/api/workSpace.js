import request from '@/utils/request'
export function batchTransfer(data) {
  return request({
    url: '/ethereum/ethereum/batchTransfer',
    method: 'post',
    data
  })
}
export function bathAll() {
  return request({
    url: '/ad-console/config/all',
    method: 'get'
  })
}
export function saveConfig(data) {
  return request({
    url: '/ad-console/config/save',
    method: 'post',
    data
  })
}
export function transactions(data) {
  return request({
    url: '/ethereum/ethereum/transactions' + data,
    method: 'get'
  })
}
export function lockRecord(data) {
  return request({
    url: '/ethereum/ethereum/lock_record' + data,
    method: 'get'
  })
}
