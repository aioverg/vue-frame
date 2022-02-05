<template>
  <div id="application-access-strategy">
    <div class="section-1">
      <el-row align="middle" :gutter="20">
        <el-col :xs="24" :sm="12">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="8">
              <el-input
                v-model="form.name"
                placeholder="请输入服务名"
                @blur="query()"
              ></el-input>
            </el-col>
            <el-col :xs="24" :sm="8">
              <el-select v-model="form.status" placeholder="请选择状态" clearable
                @change="query()">
                <el-option
                  v-for="item in setting.status"
                  :label="item.label"
                  :value="item.key"
                  :key="item.key"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :xs="24" :sm="8">
              <el-select v-model="form.groupId" placeholder="请选择分组">
                <!-- <el-option v-for="" :key=""></el-option> -->
              </el-select>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
          <el-button type="primary" @click="search()">搜索</el-button>
          <el-button type="primary" @click="add()">新增</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="section-2">
      <el-table
        :data="tableData.data"
        stripe
        height="px"
        @sort-change="sortChange"
      >
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
            <el-button type="primary" plain @click="edit(scope)"
              >编辑</el-button
            >
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
import setting from "./setting";
import KlEdit from "./widget/edit.vue";
import { accessStrategyList, accessStrategyDelete } from "@/api/application";
import moment from "moment";
export default {
  name: "ApplicationAccessStrategy",
  components: { KlEdit },
  data() {
    return {
      form: {
        groupId: "",
        name: "",
        pageNo: 1,
        pageSize: setting.pagination.pageSize,
        // sort: {},
        status: "",
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
      this.query();
    },
    // 新增
    add() {
      this.klProps = { ...this.klProps, title: "新增分组" };
      this.$refs.edit.switcher();
    },
    // 编辑
    edit(scope) {
      this.klProps = { ...this.klProps, title: "编辑分组" };
      this.$refs.edit.switcher(scope.row);
    },
    // 删除
    del(scope) {
      accessStrategyDelete(scope.row.id).then(() => {
        this.query();
      });
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
      accessStrategyList(form || this.form).then((res) => {
        res.data.records.forEach((item) => {
          const aim = setting.status.find(item1 => item1.key === item.status)
          if(aim){
            item.statusName = aim.label
          }else{
            item.statusName = item.status
          }
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
    this.setting = setting;
    this.query();
  },
};
</script>

<style lang="scss" scoped>
#application-access-strategy {
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