import { reqLogin, reqgetUserInfo, reqUserDetailInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  token: getToken() || null,
  userInfo: {}
}
const mutations = {
  setToken(state, newToken) {
    state.token = newToken
    setToken(newToken)
  },
  setUserInfo(state, newUserInfo) {
    state.userInfo = newUserInfo
  },
  removeToken(state) {
    removeToken()
    state.token = null
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }

}
const actions = {
  async login(context, data) {
    const res = await reqLogin(data)
    console.log(res)
    const newToken = res.data
    context.commit('setToken', newToken)
    return res
  },
  async getUserInfo(context) {
    const res1 = await reqgetUserInfo()
    const { data: data1 } = res1
    const params = res1.data.userId
    const res2 = await reqUserDetailInfo(params)
    const { data: data2 } = res2
    // console.log(res2)
    const obj = { ...data1, ...data2 }
    // console.log(obj)
    context.commit('setUserInfo', obj)
    return obj
  },
  async logout(context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
  }

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
