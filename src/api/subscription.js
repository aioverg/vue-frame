import request from "@/utils/request";

// 新增优惠活动
function activityAdd (data) {
  return request({
    url: '/promotion/',
    method: 'post',
    data: data
  })
}
// 更新优惠活动
function activityEdit (data) {
  return request({
    url: `/promotion/${data.id}`,
    method: 'put',
    data: data
  })
}

// 优惠活动列表
function activityList (data) {
  return request({
    url: '/promotion/page',
    method: 'post',
    data: data
  }, false)
}

// 删除优惠活动
function activityDelete (id) {
  return request({
    url: `/promotion/${id}`,
    method: 'delete',
  })
}

// 优惠活动状态
function activityStatus (data) {
  return request({
    url: `promotion/status/${data.id}`,
    method: 'put',
    data: data
  })
}

// 新增分组
function groupAdd (data) {
  return request({
    url: '/subscribeGroup/',
    method: 'post',
    data: data
  })
}

// 更新分组
function groupEdit (data) {
  return request({
    url: `/subscribeGroup/${data.id}`,
    method: 'put',
    data: data
  })
}

// 分组列表
function groupList (data) {
  return request({
    url: '/subscribeGroup/page',
    method: 'post',
    data: data
  }, false)
}
// 删除分组
function groupDelete (id) {
  return request({
    url: `/subscribeGroup/${id}`,
    method: 'delete',
  })
}

// 新增代金券
function couponAdd (data) {
  return request({
    url: '/coupon/',
    method: 'post',
    data: data
  })
}
// 更新代金券
function couponEdit (data) {
  return request({
    url: `/coupon/${data.id}`,
    method: 'put',
    data: data
  })
}
// 代金券列表
function couponList (data) {
  return request({
    url: '/coupon/page',
    method: 'post',
    data: data
  }, false)
}
// 删除代金券
function couponDelete (id) {
  return request({
    url: `/coupon/${id}`,
    method: 'delete',
  })
}
// 更改代金券状态
function couponStatus (id) {
  return request({
    url: `/coupon/status/${id}`,
    method: 'put',
  })
}
// 批量更新代金券状态
function couponStatusBatch (data) {
  return request({
    url: `/coupon/status/${data.id}`,
    method: 'put',
    data: data
  })
}



// 新增订阅
function subscribeAdd (data) {
  return request({
    url: '/subscribe/',
    method: 'post',
    data: data
  })
}
// 更新订阅
function subscribeEdit (data) {
  return request({
    url: `/subscribe/${data.id}`,
    method: 'put',
    data: data
  })
}
// 订阅列表
function subscribeList (data) {
  return request({
    url: '/subscribe/page',
    method: 'post',
    data: data
  }, false)
}
// 删除订阅
function subscribeDelete (id) {
  return request({
    url: `/subscribe/${id}`,
    method: 'delete',
  })
}

// 优惠活动状态
function subscribeStatus (data) {
  return request({
    url: `subscribe/status/${data.id}`,
    method: 'put',
    data: data
  })
}

export {
  activityAdd,
  activityEdit,
  activityList,
  activityDelete,
  activityStatus,
  groupAdd,
  groupEdit,
  groupList,
  groupDelete,
  couponAdd,
  couponEdit,
  couponList,
  couponDelete,
  couponStatus,
  couponStatusBatch,
  subscribeAdd,
  subscribeEdit,
  subscribeList,
  subscribeDelete,
  subscribeStatus
}