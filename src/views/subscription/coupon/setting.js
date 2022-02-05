import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '名字', width: '', sortable: true },
  { key: 'price', label: '金额', width: '', sortable: true },
  { key: 'code', label: 'Code', width: '', sortable: true },
  { key: 'remark', label: '备注', width: '', sortable: false },
  { key: 'statusName', label: '状态', width: '', sortable: true },
  { key: 'createDate', label: '创建时间', width: '', sortable: true },
  { key: 'beginDate', label: '出售时间', width: '', sortable: true },
  { key: 'endDate', label: '核销时间', width: '', sortable: true },
]

const status = [
  {key: 'active', label: '激活'},
  {key: 'disable', label: '禁用'},
  {key: 'in_stock', label: '入库'},
  {key: 'sold', label: '已售'},
  {key: 'checked_off', label: '已核销'},
  {key: 'nullify', label: '作废'},
]

export default {
  tableOption: tableOption,
  pagination: pagination,
  status: status,
}