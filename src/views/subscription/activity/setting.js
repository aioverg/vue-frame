import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '服务名', width: '', sortable: true },
  { key: 'type', label: '类型', width: '', sortable: true },
  { key: 'remark', label: '备注', width: '', sortable: false },
  { key: 'statusName', label: '状态', width: '', sortable: true },
  { key: 'createDate', label: '创建时间', width: '', sortable: true },
  { key: 'updateDate', label: '更新时间', width: '' , sortable: true},
]

const status = [
  {key: 'active', label: '启用'},
  {key: 'disable', label: '禁用'}
]

const type = [
  {key: 'full_sale', label: '满减'},
]

export default {
  tableOption: tableOption,
  pagination: tableOption,
  status: status,
  type: type,
}