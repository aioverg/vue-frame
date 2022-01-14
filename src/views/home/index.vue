<template>
  <div id="home">
    <el-row :gutter="80" class="section-1">
      <template v-for="(item, index) in setting.marksOption">
        <el-col :span="6" v-if="index <=3" :key="item.key">
          <div class="marks-item">{{item.label + '：' + 99999}}</div>
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="80" class="section-2">
      <template v-for="(item, index) in setting.marksOption">
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
      <el-table :data="tableData" stripe style="width: 100%; padding: 0 20px">
        <el-table-column type="index" width="80" label="编号" />
        <el-table-column
          v-for="item in setting.tableOption"
          :key="item.key"
          :prop="item.key"
          :label="item.label"
          min-width="180"
        />
        <!-- <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />-->
      </el-table>
    </div>
  </div>
</template>

<script>
import { marksOption, chartOption, tableOption } from './setting'
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
          user: 'Tom',
          status: '正常',
          date: '2022-01-01',
        },
        {
          user: 'Tom',
          status: '正常',
          date: '2022-01-01',
        },
      ]
    }
  },
  created () {
    this.setting = { marksOption, chartOption, tableOption }
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
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
  .section-2 {
    margin: 40px 0;
  }
  .section-3 {
    margin-bottom: 40px;
  }
  .section-4 {
    .s4-title {
      background: #ffffff;
      padding: 10px 20px;
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