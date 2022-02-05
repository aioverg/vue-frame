import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'username', label: '名字', width: '', sortable: true },
  { key: 'host', label: 'IP', width: '', sortable: true },
  { key: 'port', label: '端口', width: '', sortable: true },
  { key: 'userNumber', label: '类型', width: '', sortable: true },
  { key: 'groupName', label: '账号', width: '', sortable: false },
  { key: 'statusName', label: '密码', width: '', sortable: true },
  { key: 'createDate', label: '创建时间', width: '', sortable: true },
  { key: 'updateDate', label: '更新时间', width: '', sortable: true },
]
const status = [
  {key: 'active', label: '活动'},
  {key: 'disable', label: '禁用'},
]


export default {
  tableOption: tableOption,
  pagination: pagination,
  status: status
}