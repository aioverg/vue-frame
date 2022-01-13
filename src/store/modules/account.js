import { login as loginApi } from '@/api/user'
import { setToken } from '@/utils/auth'
const state = {
  token: '',
  userInfo: {},
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  login ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      loginApi(userInfo).then(res => {
        commit('SET_TOKEN', res.token)
        setToken(res.token)
        resolve()
      }).catch(error => {
        commit('SET_TOKEN', 'res.token')
        setToken('res.token')
        reject(error)
      })
    })
  },
  getInfo () {

  },
  logout () {

  }
}
export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
}