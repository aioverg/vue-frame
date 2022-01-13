import request from "@/utils/request";
/**
 * 登录
 * @param {*} data
 * @returns
 */
function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data: data
  })
}

export {
  login
}