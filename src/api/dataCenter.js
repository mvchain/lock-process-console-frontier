import request from '@/utils/request'

export function getData(data) {
  return request({
    url: '/ethereum/ethereum/all_balance' + data,
    method: 'get'
  })
}
