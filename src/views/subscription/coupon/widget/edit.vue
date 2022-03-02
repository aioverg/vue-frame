<template>
  <el-dialog
    v-model="visible"
    :title="title"
    width="500px"
    :close-on-click-modal="false"
    :destroy-on-close="true"
  >
    <div class="form">
      <el-form
        ref="formRef"
        :model="form"
        :rules="noRender.rules"
        label-width="80px"
        :disabled="type === 'READ'"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="金额" prop="price">
          <el-input-number v-model="form.price" :min="0" :controls="false" />
        </el-form-item>
        <el-form-item label="平台" prop="platform">
          <el-input v-model="form.platform" />
        </el-form-item>
        <el-form-item label="订单号" prop="order_">
          <el-input v-model="form.order_" />
        </el-form-item>
        <el-form-item label="出售日期" prop=" saledate_">
          <el-date-picker v-model="form.saledate_" type="date">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="有效期" prop="_indate">
          <el-date-picker
            v-model="form._indate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="订阅服务" prop="sub_">
          <el-select v-model="form.sub_" placeholder="请选择">
            <el-option
              v-for="item in subscribeList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            v-model="form.remark"
            type="textarea"
            :rows="2"
            show-word-limit
            :maxlength="300"
          />
        </el-form-item>
      </el-form>
    </div>
    <template #footer v-if="showFooter">
      <span>
        <el-button @click="switcher" v-if="showCancel">取消</el-button>
        <el-button type="primary" @click="confirm" v-if="showConfirm"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { couponAdd, couponEdit } from '@/api/subscription'
import moment from 'moment'
import { cloneDeep } from 'lodash'
const initForm = {
  name: '', // 名称
  price: 0, // 金额
  select: 'value', // 订阅服务
  platform: '', // 平台
  order_: '', // 订单号
  saledate_: '', // 出售日期
  beginDate: '', // 有效期
  endDate: '', // 有效期
  remark: '', // 备注
  sub_: '', // 订阅服务
  _indate: '', // 有效期
}
export default {
  name: 'SubscriptionEdit',
  props: {
    data: null, // 数据
    title: { type: String, default: '标题' }, // 标题
    type: { type: String, default: 'MODIFY' }, // 表单类型, ADD新增 | MODIFY修改 | READ只读
    showFooter: { type: Boolean, default: true }, // 是否显示底部
    showCancel: { type: Boolean, default: true }, // 是否显示取消按钮
    showConfirm: { type: Boolean, default: true }, // 是否显示确认按钮
    refresh: { type: Function, default: () => {} }, // 刷新函数
    subscribeList: { type: Array, default: [] },
  },
  data() {
    return {
      visible: false,
      form: cloneDeep(initForm),
    }
  },
  created() {
    this.noRender = {
      rules: {
        name: [{ required: true, trigger: ['change'], message: '不能为空' }],
        price: [{ required: true, trigger: ['change'], message: '不能为空' }],
        _indate: [{ required: true, trigger: ['change'], message: '不能为空' }],
      },
    }
  },
  methods: {
    // 开始关闭弹窗
    switcher(data) {
      if (this.visible) {
        this.visible = !this.visible
        return
      }
      if (data) {
        this.form = {
          id: data.id,
          name: '',
          number: 1,
          price: data.price,
          select: '',
          beginDate: '',
          endDate: '',
          _indate: [moment(data.beginDate).utc(), moment(data.endDate).utc()],
          remark: '',
          sub_: '',
        }
      } else {
        this.form = cloneDeep(initForm)
        this.visible = !this.visible
      }
    },
    // 确认按钮
    confirm() {
      this.$refs.formRef.validate().then(() => {
        this.form.beginDate = this.form._indate[0].valueOf()
        this.form.endDate = this.form._indate[1].valueOf()
        if (this.form.hasOwnProperty('id')) {
          couponEdit(this.form).then(() => {
            this.switcher()
            this.refresh()
          })
        } else {
          couponAdd(this.form).then(() => {
            this.switcher()
            this.refresh()
          })
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~@/styles/form.scss';
</style>
