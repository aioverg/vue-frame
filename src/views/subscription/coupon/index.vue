<template>
  <div id="subscription-coupon">
    <div class="section-1">
      <el-row align="middle" :gutter="20">
        <el-col :xs="24" :sm="12">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="6">
              <el-input
                v-model="form.name"
                placeholder="请输入代金券名称"
              ></el-input>
            </el-col>
            <el-col :xs="24" :sm="6">
              <el-select v-model="form.status" placeholder="请选择状态">
                <!-- <el-option v-for="" :key=""></el-option> -->
              </el-select>
            </el-col>
            <el-col :xs="24" :sm="6">
              <el-date-picker
                v-model="form.beginDate"
                type="date"
                placeholder="核销时间"
                style="width: 100%"
              >
              </el-date-picker>
            </el-col>
            <el-col :xs="24" :sm="6">
              <el-date-picker
                v-model="form.endDate"
                type="date"
                placeholder="出售时间"
                style="width: 100%"
              >
              </el-date-picker>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button type="primary" @click="add">新增</el-button>
          <el-button type="primary" @click="batchAdd">批量新增</el-button>
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
        <el-table-column width="160" label="操作">
          <template #default="scope">
            <el-button type="primary" plain @click="edit(scope)">编辑</el-button>
            <el-button type="danger" plain @click="del(scope)">删除</el-button>
          </template>
        </el-table-column>
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
    <kl-edit ref="edit" :title="klProps.title" :refresh="query" />
  </div>
</template>

<script>
import { tableOption, pagination } from "./setting";
import KlEdit from "./widget/edit.vue";
import { couponList, couponDelete } from "@/api/subscription";
import moment from "moment";
export default {
  name: "SubscriptionCoupon",
  components: { KlEdit },
  data() {
    return {
      form: {
        name: "",
        status: "",
        beginDate: "",
        endDate: "",
        pageNo: 1,
        pageSize: 10,
        // sort:{
        //   asc: false,
        //   fieldName: "",
        // },
      },
      tableData: {
        data: [],
        total: 0,
      },
      klProps: {
        title: "",
      },
    };
  },
  methods: {
    // 搜索
    search() {
      console.log("搜索");
    },
    // 新增
    add() {
      this.klProps = { ...this.klProps, title: "新增代金券" };
      this.$refs.edit.switcher();
    },
    // 批量新增
    batchAdd() {
      console.log("批量新增");
    },
    // 编辑
    edit(scope) {
      this.klProps = { ...this.klProps, title: "编辑代金券" };
      this.$refs.edit.switcher(scope.row);
    },
    // 删除
    del(scope) {
      couponDelete(scope.row.id).then(() => {
        this.query();
      });
    },
    // 改变分页
    sizeChange(val) {
      this.form.pageSize = val;
      console.log(`分页${val}`, this.tableData);
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
    // 列表
    query(form) {
      couponList(form || this.form).then((res) => {
        res.data.records.forEach((item) => {
          item.createDate = moment(item.createDate).format(
            "YYYY-MM-DD hh:mm:ss"
          );
          item.beginDate = moment(item.beginDate).format("YYYY-MM-DD hh:mm:ss");
          item.endDate = moment(item.endDate).format("YYYY-MM-DD hh:mm:ss");
          this.tableData = {
            data: res.data.records,
            total: res.data.total,
          };
        });
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
#subscription-coupon {
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