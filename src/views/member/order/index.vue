<template>
  <div id="subscription-list">
    <div class="section-1">
      <el-row align="middle" :gutter="20">
        <el-col :xs="24" :sm="20">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="4">
              <el-input
                v-model="form.name"
                placeholder="请输入用户名"
              ></el-input>
            </el-col>
            <el-col :xs="24" :sm="5">
              <el-select v-model="form.serve" placeholder="请选择订阅服务">
                <!-- <el-option v-for="" :key=""></el-option> -->
              </el-select>
            </el-col>
            <el-col :xs="24" :sm="5">
              <el-select v-model="form.status" placeholder="请选择订单状态">
                <!-- <el-option v-for="" :key=""></el-option> -->
              </el-select>
            </el-col>
            <el-col :xs="24" :sm="5">
              <el-select v-model="form.time" placeholder="请选择订阅时长">
                <!-- <el-option v-for="" :key=""></el-option> -->
              </el-select>
            </el-col>
            <el-col :xs="24" :sm="5">
              <el-date-picker
                v-model="form.createDate"
                type="date"
                placeholder="请选择创建时间"
                style="width: 100%"
              >
              </el-date-picker>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="{ span: 24 }" :sm="{ span: 4 }">
          <el-button type="primary" @click="search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="section-2">
      <el-table :data="tableData.data" stripe height="px" @sort-change="sortChange">
        <el-table-column type="index" width="80" label="编号" />
        <el-table-column
          v-for="item in setting.tableOption"
          :key="item.key"
          :label="item.label"
          :sortable="item.sortable"
          :prop="item.key"
        ></el-table-column>
      </el-table>
    </div>
    <div class="section-3">
      <el-pagination
        v-model:currentPage="form.pageNo"
        :page-size="form.pageSize"
        :total="tableData.total"
        :layout="setting.pagination.layout"
        :page-sizes="setting.pagination.pageSizes"
        background
        @size-change="sizeChange"
        @current-change="pageNoChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { tableOption, pagination } from "./setting";
import { orderList } from "@/api/member";
import moment from "moment";
export default {
  name: "SubscriptionList",
  data() {
    return {
      form: {
        name: "",
        status: "",
        serve: "",
        time: "",
        createDate: "",
      },
      tableData: {
        data: [],
        total: 0,
      },
    };
  },
  methods: {
    // 搜索
    search() {
      this.query();
    },
    // 改变分页
    sizeChange(val) {
      this.form.pageSize = val;
      this.query();
    },
    // 改变页码
    pageNoChange(val) {
      this.query();
    },
    // 排序
    sortChange(calb) {
      const asc =
        calb.order === "ascending"
          ? true
          : calb.order === "descending"
          ? false
          : "";
      const form = { ...this.form };
      if (typeof asc === "boolean") {
        form.sort = { asc: asc, fieldName: calb.column.rawColumnKey };
      }
      this.query(form);
    },
    // 查询
    query(form) {
      orderList(form || this.form).then((res) => {
        res.data.records.forEach((item) => {
          item.createDate = moment(item.createDate).format(
            "YYYY-MM-DD hh:mm:ss"
          );
          item.updateDate = moment(item.updateDate).format(
            "YYYY-MM-DD hh:mm:ss"
          );
        });
        this.tableData = {
          data: res.data.records,
          total: res.data.total,
        };
      });
    },
  },
  created() {
    this.setting = { tableOption, pagination };
    this.query();
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