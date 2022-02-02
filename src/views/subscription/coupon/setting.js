import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '名字', width: '', sortable: true },
  { key: 'price', label: '金额', width: '', sortable: true },
  { key: 'code', label: 'Code', width: '', sortable: true },
  { key: 'remark', label: '备注', width: '', sortable: false },
  { key: 'status', label: '状态', width: '', sortable: true },
  { key: 'createDate', label: '创建时间', width: '', sortable: true },
  { key: 'beginDate', label: '出售时间', width: '', sortable: true },
  { key: 'endDate', label: '核销时间', width: '', sortable: true },
]

export {
  tableOption,
  pagination
}