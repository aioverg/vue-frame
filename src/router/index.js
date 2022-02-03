import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout'

const routes = [
  { path: '/login', component: () => import('@/views/user/login') },
  { // 首页
    path: '/',
    component: Layout,
    name: 'Home',
    redirect: '/home',
    meta: { title: '控制面板', icon: '', noCache: true },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home'),
        name: 'Home',
        meta: { title: '控制面板', icon: '', noCache: true }
      }
    ]
  },
  { // 订阅服务模块
    path: '/subscription',
    component: Layout,
    redirect: '/subscription/list',
    name: 'Subscription',
    meta: { title: '订阅服务', icon: 'icon-dingyuefuwu', noCache: true },
    children: [
      {
        path: '/subscription/list',
        component: () => import('@/views/subscription/list'),
        name: 'SubscriptionList',
        meta: { title: '订阅列表', icon: '', noCache: true }
      },
      {
        path: '/subscription/group',
        component: () => import('@/views/subscription/group'),
        name: 'SubscriptionGroup',
        meta: { title: '分组管理', icon: '', noCache: true }
      },
      {
        path: '/subscription/activity',
        component: () => import('@/views/subscription/activity'),
        name: 'SubscriptionActivity',
        meta: { title: '优惠活动', icon: '', noCache: true }
      },
      {
        path: '/subscription/coupon',
        component: () => import('@/views/subscription/coupon'),
        name: 'SubscriptionCoupon',
        meta: { title: '代金券', icon: '', noCache: true }
      },
    ]
  },
  { // 应用管理模块
    path: '/application',
    component: Layout,
    redirect: '/application/list',
    name: 'Application',
    meta: { title: '应用管理', icon: 'icon-yingyongguanli', noCache: true },
    children: [
      {
        path: '/application/list',
        component: () => import('@/views/application/list'),
        name: 'ApplicationList',
        meta: { title: '应用列表', icon: '', noCache: true }
      },
      {
        path: '/application/proxy',
        component: () => import('@/views/application/proxy'),
        name: 'ApplicationProxy',
        meta: { title: '网络代理', icon: '', noCache: true }
      },
      {
        path: '/application/accessStrategy',
        component: () => import('@/views/application/accessStrategy'),
        name: 'ApplicationAccessStrategy',
        meta: { title: '访问策略', icon: '', noCache: true }
      },
    ]
  },
  { // 用户管理模块
    path: '/member',
    component: Layout,
    redirect: '/member/list',
    name: 'Member',
    meta: { title: '用户管理', icon: 'icon-yonghuguanli', noCache: true },
    children: [
      {
        path: '/member/list',
        component: () => import('@/views/member/list'),
        name: 'MemberList',
        meta: { title: '用户列表', icon: '', noCache: true }
      },
      {
        path: '/member/order',
        component: () => import('@/views/member/order'),
        name: 'MemberOrder',
        meta: { title: '订单管理', icon: '', noCache: true }
      },
      {
        path: '/member/workOrder',
        component: () => import('@/views/member/workOrder'),
        name: 'MemberWorkOrder',
        meta: { title: '工单管理', icon: '', noCache: true }
      },
      {
        path: '/member/log',
        component: () => import('@/views/member/log'),
        name: 'MemberLog',
        meta: { title: '操作日志', icon: '', noCache: true }
      },
    ]
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})




export default router