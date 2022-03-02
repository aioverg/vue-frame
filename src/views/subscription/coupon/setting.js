import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '名字', width: '', sortable: true, tooltip: true, minWidth: '120' },
  { key: 'price', label: '金额', width: '', sortable: true, tooltip: false, minWidth: '110' },
  { key: 'code', label: 'Code', width: '', sortable: true, tooltip: true, minWidth: '120' },
  { key: 'platformName', label: '平台', width: '', sortable: true, tooltip: true, minWidth: '110' },
  { key: 'orderNo', label: '订单号', width: '', sortable: true, tooltip: true, minWidth: '120' },
  { key: 'remark', label: '备注', width: '', sortable: false, tooltip: true, minWidth: '120' },
  { key: 'statusName', label: '状态', width: '', sortable: true, tooltip: false, minWidth: '80' },
  { key: 'createDate', label: '创建时间', width: '', sortable: true, tooltip: false, minWidth: '160' },
  { key: 'updateDate', label: '更新时间', width: '', sortable: true, tooltip: false, minWidth: '160' },
  { key: 'checkedOffDate', label: '核销日期', width: '', sortable: true, tooltip: false, minWidth: '160' },
]

const status = [
  { key: 'active', label: '激活' },
  { key: 'disable', label: '禁用' },
  { key: 'in_stock', label: '入库' },
  { key: 'sold', label: '已售' },
  { key: 'checked_off', label: '已核销' },
  { key: 'nullify', label: '作废' },
]

export default {
  tableOption: tableOption,
  pagination: pagination,
  status: status,
}