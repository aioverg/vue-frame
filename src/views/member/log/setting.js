import { pagination } from '@/utils/setting'
const tableOption = [
  { key: 'name', label: '服务名', width: '' },
  { key: 'price', label: '价格', width: '' },
  { key: 'remark', label: '简介', width: '' },
  { key: 'userNumber', label: '订阅数', width: '' },
  { key: 'groupName', label: '分组', width: '' },
  { key: 'status', label: '状态', width: '' },
  { key: 'createDate', label: '创建时间', width: '' },
  { key: 'updateDate', label: '更新时间', width: '' },
]

export {
  tableOption,
  pagination
}