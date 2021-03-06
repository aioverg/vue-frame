import { login as loginApi } from '@/api/user'
import { setToken,removeToken } from '@/utils/auth'
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
        commit('SET_TOKEN', res.data.token)
        setToken(res.data.token)
        resolve()
      }).catch(error => {
        commit('SET_TOKEN', res.data.token)
        setToken(res.data.token)
        reject(error)
      })
    })
  },
  getInfo () {

  },
  logout ({commit}) {
    commit('SET_TOKEN', '')
    removeToken()
    location.reload()
  }
}
export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
}