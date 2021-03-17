import { reqLogin } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'
const state = {
  token: getToken() || null
}
const mutations = {
  setToken(state, newToken) {
    state.token = newToken
    setToken(newToken)
  }
}
const actions = {
  async login(context, data) {
    const res = await reqLogin(data)
    console.log(res)
    const newToken = res.data
    context.commit('setToken', newToken)
    return res
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
