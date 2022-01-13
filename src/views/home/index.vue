<template>
  <div id="home">
    <el-row :gutter="80" class="section-1">
      <template v-for="(item, index) in setting.marks">
        <el-col :span="6" v-if="index <=3" :key="item.key">
          <div class="marks-item">{{item.label + '：' + 99999}}</div>
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="80" class="section-2">
      <template v-for="(item, index) in setting.marks">
        <el-col :span="6" v-if="index >3" :key="item.key">
          <div class="marks-item">{{item.label + '：' + 99999}}</div>
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="80" class="section-3">
      <el-col :span="12">
        <div class="chart-label">用户增长</div>
        <div class="chart-content" ref="lineRef"></div>
      </el-col>
      <el-col :span="12">
        <div class="chart-label">每日订单</div>
        <div class="chart-content" ref="barRef"></div>
      </el-col>
    </el-row>
    <div class="section-4">
      <div class="s4-title">工单消息</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { marks, chartOption } from './setting'
import * as echarts from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers';
import {
  TooltipComponent,
  GridComponent,
} from 'echarts/components';


echarts.use([
  CanvasRenderer,
  BarChart,
  LineChart,
  TooltipComponent,
  GridComponent,
]);
export default {
  name: 'Home',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
    }
  },
  created () {
    this.setting = { marks, chartOption }
    this.noRender = {
      barChart: null,
      lineChart: null
    }
  },
  methods: {
    // 重置图形属性
    chartResize () {
      if (this.noRender.barChart) {
        this.noRender.barChart.resize()
      }
      if (this.noRender.lineChart) {
        this.noRender.lineChart.resize()
      }
    },
    // 初始化
    init () {
      const barChart = echarts.init(this.$refs.barRef)
      const lineChart = echarts.init(this.$refs.lineRef)
      this.noRender.barChart = barChart
      this.noRender.lineChart = lineChart
      const seriesLine = [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line'
      }]
      const seriesBar = [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }]
      barChart.setOption({ ...this.setting.chartOption, series: seriesBar })
      lineChart.setOption({ ...this.setting.chartOption, series: seriesLine })
      addEventListener('resize', this.chartResize)
    }
  },
  mounted () {
    this.init()
  },
  unmounted () {
    removeEventListener('resize', this.chartResize)
  }
}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .section-2 {
    margin: 40px 0;
  }
  .section-3 {
    margin-bottom: 40px;
  }
  .section-4 {
    .s4-title {
      background: #ffffff;
    }
  }
  .marks-item {
    border-radius: 2px;
    height: 100px;
    line-height: 100px;
    background-color: #ffffff;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 20px;
  }
  .chart-content {
    background-color: #ffffff;
    padding: 0 20px;
    height: 300px;
  }
  .chart-label {
    background-color: #ffffff;
    padding: 10px 20px 0 20px;
  }
}
</style>