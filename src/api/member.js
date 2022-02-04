import request from "@/utils/request";

// 新增用户
function userAdd (data) {
  return request({
    url: '/user/',
    method: 'post',
    data: data
  })
}
// 更新用户
function userEdit (data) {
  return request({
    url: `/user/${data.id}`,
    method: 'put',
    data: data
  })
}

// 用户列表
function userList (data) {
  return request({
    url: '/user/page',
    method: 'post',
    data: data
  }, false)
}

// 删除用户
function userDelete (id) {
  return request({
    url: `/user/${id}`,
    method: 'delete',
  })
}

// 订单列表
function orderList (data) {
  return request({
    url: '/order/page',
    method: 'post',
    data: data
  }, false)
}

// 消息列表
function messageList (data) {
  return request({
    url: '/message/page',
    method: 'post',
    data: data
  })
}
// 回复消息
function messageReplay (data) {
  return request({
    url: `/message/replay`,
    method: 'put',
    data: data
  }, false)
}

// 发送消息
function messageSend (data) {
  return request({
    url: '/message/send',
    method: 'put',
    data: data
  })
}

// 更新消息状态
function messageStatus (id) {
  return request({
    url: `/message/status/${id}`,
    method: 'post',
    data: data
  })
}

export {
  userAdd,
  userEdit,
  userList,
  userDelete,
  orderList,
  messageList,
  messageReplay,
  messageSend,
  messageStatus
}