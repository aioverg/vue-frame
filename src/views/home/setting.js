// 指标卡
const marksOption = [
  {
    key: 'todayAddNumber',
    label: '今日新增',
    icon: '',
  },
  {
    key: 'todaySubscribeNumber',
    label: '今日订阅',
    icon: '',
  },
  {
    key: 'activeUserNumber',
    label: '活跃用户数',
    icon: '',
  },
  {
    key: 'totalUserNumber',
    label: '总用户数',
    icon: '',
  },
  {
    key: 'todayIncome',
    label: '今日收入',
    icon: '',
  },
  {
    key: 'totalRevenue',
    label: '总利润',
    icon: '',
  },
  {
    key: 'totalIncome',
    label: '总收入',
    icon: '',
  },
  {
    key: 'totalExpense',
    label: '总支出',
    icon: '',
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