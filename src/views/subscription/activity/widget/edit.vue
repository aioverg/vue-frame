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
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="form.name" placeholder="活动名称" />
        </el-form-item>
        <el-form-item label="活动规则">
          <el-select v-model="form.type" placeholder="Select" @change="change">
            <el-option
              v-for="item in noRender.type"
              :key="item.key"
              :label="item.label"
              :value="item.key"
            >
            </el-option>
          </el-select>
          <el-form-item v-show="form.type === 'full_sale'" key="full_sale">
            <el-form-item label="满" prop="rule.full">
              <el-input-number
                v-model="form.rule.full"
                :min="0"
                :controls="false"
              />
            </el-form-item>
            <el-form-item label="减" prop="rule.reduce">
              <el-input-number
                v-model="form.rule.reduce"
                :min="0"
                :controls="false"
              />
            </el-form-item>
          </el-form-item>
          <el-form-item v-show="form.type === 'discount'" key="discount">
            <el-input-number
              v-model="form.rule.discount"
              :min="0"
              :controls="false"
            />
          </el-form-item>
        </el-form-item>
        <el-form-item label="多行文本" prop="remark">
          <el-input
            v-model="form.remark"
            type="textarea"
            :rows="2"
            show-word-limit
            :maxlength="300"
            placeholder="备注"
          />
        </el-form-item>
      </el-form>
    </div>
    <template #footer v-if="showFooter">
      <span>
        <el-button @click="switcher()" v-if="showCancel">取消</el-button>
        <el-button type="primary" @click="confirm" v-if="showConfirm"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { activityAdd, activityEdit } from '@/api/subscription'
import { type } from '../setting'
import { cloneDeep } from 'lodash'
const initForm = {
  name: '',
  remark: '',
  rule: { full: 0, reduce: 0 },
  type: 'full_sale',
}
const initRule = {
  full_sale: { full: 0, reduce: 0 },
  discount: { discount: 0 },
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
      },
      type: type,
    }
  },
  methods: {
    // 开启关闭弹窗
    switcher(data) {
      if (this.visible) {
        this.visible = !this.visible
        return
      }
      if (data) {
        this.form = {
          id: data.id,
          name: data.name,
          remark: data.remark,
          rule: JSON.parse(data.rule),
          type: data.type,
        }
      } else {
        this.form = cloneDeep(initForm)
      }
      this.visible = !this.visible
    },
    // 确认按钮
    confirm() {
      this.$refs.formRef.validate().then(() => {
        console.log(111111, this.form)
        if (this.form.hasOwnProperty('id')) {
          activityEdit(this.form).then(() => {
            this.switcher()
            this.refresh()
          })
        } else {
          activityAdd(this.form).then(() => {
            this.switcher()
            this.refresh()
          })
        }
      })
    },
    // 活动规则改变
    change(val) {
      this.form.rule = { ...initRule[val] }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~@/styles/form.scss';
</style>
