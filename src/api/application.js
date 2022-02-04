import request from "@/utils/request";

// 新增应用
function appAdd (data) {
  return request({
    url: '/app/',
    method: 'put',
    data: data
  })
}
// 更新应用
function appEdit (data) {
  return request({
    url: `/app/${data.id}`,
    method: 'post',
    data: data
  })
}

// 应用列表
function appList (data) {
  return request({
    url: '/app/page',
    method: 'post',
    data: data
  }, false)
}

// 删除应用
function appDelete (id) {
  return request({
    url: `/app/${id}`,
    method: 'delete',
  })
}

// 应用状态
function appStatus (data) {
  return request({
    url: `app/status/${data.id}`,
    method: 'put',
    data: data
  })
}

// 新增网络代理
function proxyAdd (data) {
  return request({
    url: '/proxy/',
    method: 'put',
    data: data
  })
}
// 更新网络代理
function proxyEdit (data) {
  return request({
    url: `/proxy/${data.id}`,
    method: 'post',
    data: data
  })
}

// 网络代理列表
function proxyList (data) {
  return request({
    url: '/proxy/page',
    method: 'post',
    data: data
  }, false)
}

// 删除网络代理
function proxyDelete (id) {
  return request({
    url: `/proxy/${id}`,
    method: 'delete',
  })
}

// 网络代理状态
function proxyStatus (data) {
  return request({
    url: `proxy/status/${data.id}`,
    method: 'put',
    data: data
  })
}

// 新增访问策略
function accessStrategyAdd (data) {
  return request({
    url: '/accessStrategy/',
    method: 'put',
    data: data
  })
}
// 更新访问策略
function accessStrategyEdit (data) {
  return request({
    url: `/accessStrategy/${data.id}`,
    method: 'post',
    data: data
  })
}

// 访问策略列表
function accessStrategyList (data) {
  return request({
    url: '/accessStrategy/page',
    method: 'post',
    data: data
  }, false)
}

// 删除访问策略
function accessStrategyDelete (id) {
  return request({
    url: `/accessStrategy/${id}`,
    method: 'delete',
  })
}

// 访问策略状态
function accessStrategyStatus (data) {
  return request({
    url: `accessStrategy/status/${data.id}`,
    method: 'put',
    data: data
  })
}

export {
  appAdd,
  appEdit,
  appList,
  appDelete,
  appStatus,
  proxyAdd,
  proxyEdit,
  proxyList,
  proxyDelete,
  proxyStatus,
  accessStrategyAdd,
  accessStrategyEdit,
  accessStrategyList,
  accessStrategyDelete,
  accessStrategyStatus
}