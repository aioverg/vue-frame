// 指标卡
const marksOption = [
  {
    key: 'todayAddNumber',
    label: '今日新增',
    icon: 'icon-jinrixinzeng',
  },
  {
    key: 'todaySubscribeNumber',
    label: '今日订阅',
    icon: 'icon-dingyue',
  },
  {
    key: 'activeUserNumber',
    label: '活跃用户数',
    icon: 'icon-huoyueyonghu',
  },
  {
    key: 'totalUserNumber',
    label: '总用户数',
    icon: 'icon-zonghuyong',
  },
  {
    key: 'todayIncome',
    label: '今日收入',
    icon: 'icon-jinrishouru',
  },
  {
    key: 'totalRevenue',
    label: '总利润',
    icon: 'icon-lirun',
  },
  {
    key: 'totalIncome',
    label: '总收入',
    icon: 'icon-shouru',
  },
  {
    key: 'totalExpense',
    label: '总支出',
    icon: 'icon-zhichu',
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