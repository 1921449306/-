import request from '@/utils/request'

export function reqLogin(data) {
  return request({
    method: 'post',
    url: '/sys/login',
    data
  })
}

export function reqgetUserInfo() {
  return request({
    method: 'POST',
    url: '/sys/profile'
  })
}
export function reqUserDetailInfo(id) {
  return request({
    method: 'GET',
    url: `/sys/user/${id}`
  })
}
export function logout() {

}
