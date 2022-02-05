import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '应用名', width: '', sortable: true },
  { key: 'price', label: '归属订阅', width: '', sortable: true },
  { key: 'remark', label: '网络代理', width: '', sortable: true },
  { key: 'userNumber', label: '环境', width: '', sortable: true },
  { key: 'statusName', label: '状态', width: '', sortable: true },
  { key: 'createDate', label: '创建时间', width: '', sortable: true },
  { key: 'updateDate', label: '更新时间', width: '', sortable: true },
]

const status = [
  {key: 'active', label: '活动'},
  {key: 'disable', label: '禁用'},
]

export default {
  tableOption: tableOption,
  pagination: tableOption,
  status: status,
}