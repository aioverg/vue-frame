import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'userId', label: '用户', width: '', sortable: true },
  { key: 'content', label: '消息', width: '', sortable: true },
  { key: 'createDate', label: '创建时间', width: '', sortable: true },
  { key: 'status', label: '状态', width: '', sortable: true },
]

export {
  tableOption,
  pagination
}