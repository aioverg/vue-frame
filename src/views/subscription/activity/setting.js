import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '服务名', minWidth: '150', tooltip: true, sortable: true },
  { key: 'typeName', label: '类型', minWidth: '80', tooltip: false, sortable: true },
  { key: 'remark', label: '备注', minWidth: '150', tooltip: true, sortable: false },
  { key: 'statusName', label: '状态', minWidth: '80', tooltip: false, sortable: true },
  { key: 'createDate', label: '创建时间', minWidth: '160', tooltip: false, sortable: true },
  { key: 'updateDate', label: '更新时间', minWidth: '160', tooltip: false, sortable: true },
]

const status = [
  { key: 'active', label: '启用' },
  { key: 'disable', label: '禁用' }
]

const type = [
  { key: 'full_sale', label: '满减' },
  { key: 'discount', label: '折扣' },
]

export default {
  tableOption: tableOption,
  pagination: tableOption,
  status: status,
  type: type,
}

export { type }