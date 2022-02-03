import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '手机号', width: '', sortable: true },
  { key: 'price', label: '订阅', width: '', sortable: true },
  { key: 'nickname', label: '昵称', width: '', sortable: true },
  { key: 'userNumber', label: '备注', width: '', sortable: false },
  { key: 'role', label: '角色', width: '', sortable: true },
  { key: 'status', label: '状态', width: '', sortable: true },
  { key: 'createDate', label: '注册时间', width: '', sortable: true },
  { key: 'updateDate', label: '最后在线', width: '', sortable: true },
]

export {
  tableOption,
  pagination
}