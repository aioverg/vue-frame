import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '名字', width: '' },
  { key: 'price', label: '金额', width: '' },
  { key: 'remark---', label: 'Code', width: '' },
  { key: 'remark', label: '备注', width: '' },
  { key: 'status', label: '状态', width: '' },
  { key: 'createDate', label: '创建时间', width: '' },
  { key: 'updateDate--', label: '出售时间', width: '' },
  { key: 'updateDate--', label: '核销时间', width: '' },
]

export {
  tableOption,
  pagination
}