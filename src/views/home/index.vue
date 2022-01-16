<template>
  <div id="home">
    <el-row :gutter="60" class="section-1">
      <template v-for="(item, index) in setting.marksOption">
        <el-col :xs="24" :sm="12" :md="6" v-if="index <= 3" :key="item.key">
          <div class="marks-item">
            <span><kl-icon :icon-name="item.icon" size="34px" /></span>
            <span>{{ item.label + "：" + 99999 }}</span>
          </div>
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="60" class="section-2">
      <template v-for="(item, index) in setting.marksOption">
        <el-col :xs="24" :sm="12" :md="6"  v-if="index > 3" :key="item.key">
          <div class="marks-item">
            <span><kl-icon :icon-name="item.icon" size="34px" /></span>
            <span>{{ item.label + "：" + 99999 }}</span>
          </div>
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="60" class="section-3">
      <el-col :sm="24" :md="12">
        <div class="chart-label">用户增长</div>
        <div class="chart-content" ref="lineRef"></div>
      </el-col>
      <el-col :sm="24" :md="12">
        <div class="chart-label">每日订单</div>
        <div class="chart-content" ref="barRef"></div>
      </el-col>
    </el-row>
    <div class="section-4">
      <div class="s4-title">工单消息</div>
      <div>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column type="index" width="80" label="编号" />
          <el-table-column
            v-for="item in setting.tableOption"
            :key="item.key"
            :prop="item.key"
            :label="item.label"
            min-width="180"
          />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { marksOption, chartOption, tableOption } from "./setting";
import * as echarts from "echarts/core";
import { BarChart, LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent, GridComponent } from "echarts/components";

echarts.use([
  CanvasRenderer,
  BarChart,
  LineChart,
  TooltipComponent,
  GridComponent,
]);
export default {
  name: "Home",
  data() {
    return {
      tableData: [
        {
          user: "Tom",
          status: "正常",
          date: "2022-01-01",
        },
        {
          user: "Tom",
          status: "正常",
          date: "2022-01-01",
        },
      ],
    };
  },
  created() {
    this.setting = { marksOption, chartOption, tableOption };
    this.noRender = {
      barChart: null,
      lineChart: null,
    };
  },
  methods: {
    // 重置图形属性
    chartResize() {
      if (this.noRender.barChart) {
        this.noRender.barChart.resize();
      }
      if (this.noRender.lineChart) {
        this.noRender.lineChart.resize();
      }
    },
    // 初始化
    init() {
      const barChart = echarts.init(this.$refs.barRef);
      const lineChart = echarts.init(this.$refs.lineRef);
      this.noRender.barChart = barChart;
      this.noRender.lineChart = lineChart;
      const seriesLine = [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "line",
        },
      ];
      const seriesBar = [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ];
      barChart.setOption({ ...this.setting.chartOption, series: seriesBar });
      lineChart.setOption({ ...this.setting.chartOption, series: seriesLine });
      addEventListener("resize", this.chartResize);
    },
  },
  mounted() {
    this.init();
  },
  unmounted() {
    removeEventListener("resize", this.chartResize);
  },
};
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px 20px 20px 20px;
  .section-3 {
    margin-bottom: 10px;
  }
  .section-4 {
    padding: 0 20px 20px 20px;
    background: #ffffff;
    .s4-title {
      padding: 10px 0;
    }
  }
  .marks-item {
    border-radius: 2px;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    text-align: center;
    
    padding: 0 20px;
    margin: 10px 0 ;
    font-weight: bold;
    font-size: 20px;
    color: #909399;
    cursor: default;
    &:hover{
      box-shadow: 0 0 8px 0 rgba(0,0,0,0.1);
    }
    & > :first-child {
      margin-right: 14px;
    }
    & > :last-child {
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
  }
  .chart-content {
    background-color: #ffffff;
    padding: 0 20px;
    height: 300px;
    margin-bottom: 10px;
  }
  .chart-label {
    background-color: #ffffff;
    padding: 10px 20px 0 20px;
    margin-top: 10px;
  }
}
</style>