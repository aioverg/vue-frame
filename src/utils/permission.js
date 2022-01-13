/**
 * 权限控制相关文件
 */
import router from '@/router'
import { getToken } from './auth'

const whiteList = ['/login', '/register', '/404', '/401', '/install']
router.beforeEach((to, from, next) => {
  if (!getToken()) {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})