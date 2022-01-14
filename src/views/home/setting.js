// 指标卡
const marksOption = [
  {
    key: 'todayAddNumber',
    label: '今日新增',
  },
  {
    key: 'todaySubscribeNumber',
    label: '今日订阅',
  },
  {
    key: 'activeUserNumber',
    label: '活跃用户数',
  },
  {
    key: 'totalUserNumber',
    label: '总用户数',
  },
  {
    key: 'todayIncome',
    label: '今日收入',
  },
  {
    key: 'totalRevenue',
    label: '总利润',
  },
  {
    key: 'totalIncome',
    label: '总收入',
  },
  {
    key: 'totalExpense',
    label: '总支出',
  },
]

// chart 配置
const chartOption = {
  tooltip: {
    show: true
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
}

// 表格设置

const tableOption = [
  { key: 'user', label: '用户' },
  { key: 'status', label: '状态' },
  { key: 'date', label: '创建日期' },
]

export {
  marksOption,
  chartOption,
  tableOption
}