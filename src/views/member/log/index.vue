<template>
  <div id="subscription-list">
    <div class="section-1">
      <el-row align="middle" :gutter="20">
        <el-col :xs="24" :sm="12">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="8">
              <el-input
                v-model="form.name"
                placeholder="请输入用户名"
              ></el-input>
            </el-col>
            <el-col :xs="24" :sm="8">
              <el-select v-model="form.status" placeholder="请选择操作类型">
                <!-- <el-option v-for="" :key=""></el-option> -->
              </el-select>
            </el-col>
            <el-col :xs="24" :sm="8">
              <el-date-picker
                v-model="form.createDate"
                type="date"
                placeholder="请选择操作时间"
                style="width: 100%"
              >
              </el-date-picker>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
          <el-button type="primary" @click="search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="section-2">
      <el-table :data="tableData.data" stripe height="px">
        <el-table-column type="index" width="80" label="编号" />
        <el-table-column
          v-for="item in setting.tableOption"
          :key="item.key"
          :label="item.label"
        ></el-table-column>
      </el-table>
    </div>
    <div class="section-3">
      <el-pagination
        v-model:currentPage="tableData.current"
        :page-size="30"
        :total="tableData.total"
        :layout="setting.pagination.layout"
        :page-sizes="setting.pagination.pageSizes"
        background
        @size-change="sizeChange"
        @current-change="currentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { tableOption, pagination } from "./setting";
export default {
  name: "MemberLog",
  data() {
    return {
      form: {
        name: "",
        status: "",
        createDate: "",
      },
      tableData: {
        data: new Array(100).fill(1),
        current: 2,
        pages: 0,
        size: 20,
        total: 1000,
      },
    };
  },
  methods: {
    // 搜索
    search() {
      console.log("搜索");
    },
    // 改变分页
    sizeChange(val) {
      this.tableData.size = val;
      console.log(`分页${val}`, this.tableData);
    },
    // 改变页码
    currentChange(val) {
      console.log(`当前页码: ${val}`, this.tableData);
    },
  },
  created() {
    this.setting = { tableOption, pagination };
  },
};
</script>

<style lang="scss" scoped>
#subscription-list {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .el-select {
    width: 100%;
  }
  .section-1 {
    background: #ffffff;
    min-height: 80px;
    padding: 15px 20px;
    .el-col {
      margin: 5px 0;
    }
  }
  .section-2 {
    background: #ffffff;
    margin-top: 20px;
    flex: 1;
    overflow: hidden;
    padding: 20px;
  }
  .section-3 {
    background: #ffffff;
    padding: 0 20px 20px 20px;
    text-align: right;
  }
}
</style>