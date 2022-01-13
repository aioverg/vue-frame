import Cookies from 'js-cookie'
const TokenKey = 'security_token'

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