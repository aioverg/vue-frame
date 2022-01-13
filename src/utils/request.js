import axios from "axios";
import { ElMessage } from "element-plus";
import store from '@/store'

const request = axios.create({
  baseURL: '/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// 请求拦截
request.interceptors.request.use(config => {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 返回拦截
request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== '1') {
      ElMessage({
        message: res.msg || 'Error',
        grouping: true,
        type: 'error',
      })
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) { // re-login
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      }
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    ElMessage({
      message: error.message,
      type: 'error',
    })
    return Promise.reject(error);
  }
);

export default request