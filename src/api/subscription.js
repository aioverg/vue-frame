import request from "@/utils/request";

// 新增优惠活动
function activityAdd (data) {
  return request({
    url: '/promotion/',
    method: 'post',
    data: data
  })
}

// 优惠活动列表
function activityList (data) {
  return request({
    url: '/promotion/page',
    method: 'post',
    data: data
  })
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
  })
}
// 删除分组
function groupDelete (id) {
  return request({
    url: `/subscribeGroup/${id}`,
    method: 'delete',
  })
}

export {
  activityAdd,
  activityList,
  activityDelete,
  activityStatus,
  groupAdd,
  groupEdit,
  groupList,
  groupDelete
}