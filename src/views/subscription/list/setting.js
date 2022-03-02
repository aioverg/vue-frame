import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '服务名', sortable: true, tooltip: false, minWidth: '150' },
  { key: 'originalPrice', label: '原始价格', sortable: true, tooltip: false, minWidth: '120' },
  { key: 'currentPrice', label: '当前价格', sortable: true, tooltip: false, minWidth: '120' },
  { key: 'promotions', label: '关联活动', sortable: true, tooltip: true, minWidth: '150' },
  { key: 'remark', label: '简介', sortable: false, tooltip: true, minWidth: '150' },
  { key: 'userNumber', label: '订阅数', sortable: true, tooltip: false, minWidth: '100' },
  { key: 'groupName', label: '分组', sortable: true, tooltip: false, minWidth: '120' },
  { key: 'statusName', label: '状态', sortable: true, tooltip: false, minWidth: '80' },
  { key: 'createDate', label: '创建时间', sortable: true, tooltip: false, minWidth: '150' },
  { key: 'updateDate', label: '更新时间', sortable: true, tooltip: false, minWidth: '150' },
]
const status = [
  { key: 'active', label: '在售' },
  { key: 'disable', label: '下架' },
]

export default {
  tableOption: tableOption,
  pagination: pagination,
  status: status,
}