import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '分组名', width: '', sortable: true },
  { key: 'remark', label: '简介', width: '', sortable: false },
  { key: 'subscribeCount', label: '订阅数', width: '', sortable: true },
  { key: 'createDate', label: '创建时间', width: '', sortable: true },
  { key: 'updateDate', label: '更新时间', width: '', sortable: true },
]

export default {
  tableOption: tableOption,
  pagination: pagination,
}