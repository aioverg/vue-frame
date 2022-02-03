import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'username', label: '名字', width: '', sortable: true },
  { key: 'host', label: 'IP', width: '', sortable: true },
  { key: 'port', label: '端口', width: '', sortable: true },
  { key: 'userNumber', label: '类型', width: '', sortable: true },
  { key: 'groupName', label: '账号', width: '', sortable: false },
  { key: 'status', label: '密码', width: '', sortable: true },
  { key: 'createDate', label: '创建时间', width: '', sortable: true },
  { key: 'updateDate', label: '更新时间', width: '', sortable: true },
]

export {
  tableOption,
  pagination
}