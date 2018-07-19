import request from '@/utils/request'

export function loginByUsername(data) {
  return request({
    url: '/pcagentapi/login',
    method: 'post',
    data
  })
}

export function orderList(data) {
  return request({
    url: '/pcagentapi/order/list',
    method: 'post',
    data
  })
}

export function cancelOrder(data) {
  return request({
    url: '/pcagentapi/order/cancel',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

