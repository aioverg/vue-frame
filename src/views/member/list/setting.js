import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'cellphone', label: '手机号', sortable: true, tooltip: false, minWidth: '110' },
  { key: 'subscribes', label: '订阅', sortable: true, tooltip: false, minWidth: '120' },
  { key: 'nickname', label: '昵称', sortable: true, tooltip: false, minWidth: '120' },
  { key: 'userNumber', label: '备注', sortable: false, tooltip: false, minWidth: '120' },
  { key: 'roleName', label: '角色', sortable: true, tooltip: false, minWidth: '100' },
  { key: 'statusName', label: '状态', sortable: true, tooltip: false, minWidth: '80' },
  { key: 'createDate', label: '注册时间', sortable: true, tooltip: false, minWidth: '160' },
  { key: 'updateDate', label: '最后在线', sortable: true, tooltip: false, minWidth: '160' },
]

const status = [
  { key: 'active', label: '活动' },
  { key: 'disable', label: '禁用' },
]

export default {
  tableOption: tableOption,
  pagination: pagination,
  status: status,
}