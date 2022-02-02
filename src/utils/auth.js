import Cookies from 'js-cookie'
const TokenKey = 'accessToken'

function setToken (token) {
  Cookies.set(TokenKey, token)
}

function getToken () {
  return Cookies.get(TokenKey)
}

function removeToken () {
  Cookies.remove(TokenKey)
}

export {
  setToken,
  getToken,
  removeToken
}