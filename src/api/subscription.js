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


export {
  activityAdd,
  activityList,
  activityDelete,
  activityStatus
}