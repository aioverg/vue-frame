import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '服务名', width: '', sortable: true },
  { key: 'price', label: '价格', width: '', sortable: true },
  { key: 'remark', label: '简介', width: '', sortable: false },
  { key: 'userNumber', label: '订阅数', width: '', sortable: true },
  { key: 'groupName', label: '分组', width: '', sortable: true },
  { key: 'statusName', label: '状态', width: '', sortable: true },
  { key: 'createDate', label: '创建时间', width: '', sortable: true },
  { key: 'updateDate', label: '更新时间', width: '', sortable: true },
]
const status = [
  {key: 'active', label: '在售'},
  {key: 'disable', label: '下架'},
]

export default {
  tableOption: tableOption,
  pagination: pagination,
  status: status,
}