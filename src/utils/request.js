import axios from "axios";
import { ElMessage } from "element-plus";
import store from '@/store'
import { getToken } from './auth'

function request(params, successHint = true, errorHint = true) {
  // 创建实例
  const axiosEx = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
      'X-Custom-Header': 'foobar',
      'accessToken': getToken()
    }
  });

  // 请求拦截
  axiosEx.interceptors.request.use(config => {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  // 返回拦截
  axiosEx.interceptors.response.use(
    response => {
      const res = response.data
      if (res.code !== 1) {
        ElMessage({
          message: res.msg || 'Error',
          grouping: true,
          type: 'error',
        })
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) { // re-login
          ElMessage({
            message: '登录过期, 重新登陆',
            type: 'warning',
          })
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        }
      } else {
        if (successHint) {
          ElMessage({
            message: '操作成功',
            type: 'success',
          })
        }
        return Promise.resolve(res)
      }
    },
    error => {
      if (errorHint) {
        ElMessage({
          message: error.message,
          type: 'error',
        })
      }
      return Promise.reject(error);
    }
  );

  return axiosEx(params)
}

export default request