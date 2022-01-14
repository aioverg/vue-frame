<template>
  <div id="subscription-list">
    <el-row class="section-1" align="middle">
      <el-col :span="12">
        <el-form>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item>
                <el-input v-model="form.name" placeholder="请输入服务名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item>
                <el-select v-model="form.status" placeholder="请选择状态" style="width: 100%">
                  <!-- <el-option v-for="" :key=""></el-option> -->
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item>
                <el-select v-model="form.groupId" placeholder="请选择分组">
                  <!-- <el-option v-for="" :key=""></el-option> -->
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
      <el-col :span="11" :push="1">
        <el-button type="primary" class="s1-bt">搜索</el-button>
        <el-button type="primary" class="s1-bt">新增</el-button>
      </el-col>
    </el-row>
    <div class="section-2">
      <el-table :data="tableData" stripe height="px">
        <el-table-column type="index" width="80" label="编号" />
        <el-table-column v-for="item in setting.tableOption" :key="item.key" :label="item.label"></el-table-column>
        <el-table-column width="240" label="操作">
          <el-button type="primary" plain>编辑</el-button>
          <el-button type="danger" plain>删除</el-button>
          <el-button type="warning" plain>下架</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="section-3">
      <el-pagination
        :layout="setting.pagination.layout"
        :total="1000"
        :page-size="setting.pagination.pageSizes"
        background
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { tableOption, pagination } from './setting'
export default {
  name: 'SubscriptionList',
  data () {
    return {
      form: {
        groupId: '',
        name: '',
        pageNo: '',
        pageSize: '',
        // sort: {},
        status: ''
      },
      tableData: new Array(100).fill(1)
    }
  },
  created () {
    this.setting = { tableOption, pagination }
  }
}
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
    padding: 18px 20px 0 20px;
    .s1-bt {
      margin-bottom: 18px;
    }
  }
  .section-2 {
    background: #ffffff;
    margin-top: 30px;
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