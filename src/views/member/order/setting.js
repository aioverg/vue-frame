import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '订单编号', width: '', sortable: true },
  { key: 'price', label: '用户', width: '', sortable: true },
  { key: 'remark', label: '订阅服务', width: '', sortable: true },
  { key: 'userNumber', label: '金额', width: '', sortable: true },
  { key: 'createDate', label: '创建时间', width: '', sortable: true },
  { key: 'updateDate', label: '支付时间', width: '', sortable: true},
  { key: 'updateDate----', label: '状态', width: '', sortable: true },
]

export {
  tableOption,
  pagination
}