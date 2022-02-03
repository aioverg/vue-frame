import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '名字', width: '', sortable: true },
  { key: 'rule', label: '规则', width: '', sortable: true },
  { key: 'status', label: '状态', width: '', sortable: true },
  { key: 'type', label: '类型', width: '', sortable: true },
  { key: 'updateDate', label: '更新时间', width: '', sortable: true },
]

export {
  tableOption,
  pagination
}