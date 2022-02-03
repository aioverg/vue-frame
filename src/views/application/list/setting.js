import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '应用名', width: '', sortable: true },
  { key: 'price', label: '归属订阅', width: '', sortable: true },
  { key: 'remark', label: '网络代理', width: '', sortable: true },
  { key: 'userNumber', label: '环境', width: '', sortable: true },
  { key: 'status', label: '状态', width: '', sortable: true },
  { key: 'createDate', label: '创建时间', width: '', sortable: true },
  { key: 'updateDate', label: '更新时间', width: '', sortable: true },
]

export {
  tableOption,
  pagination
}