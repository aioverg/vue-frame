<template>
  <el-dialog
    v-model="visible"
    :title="title"
    width="500px"
    :close-on-click-modal="false"
  >
    <div class="form">
      <el-form
        ref="formRef"
        :model="form"
        :rules="noRender.rules"
        label-width="80px"
        :disabled="type === 'READ'"
      >
        <el-form-item label="名字" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="原始价格" prop="originalPrice">
          <el-input-number
            v-model="form.originalPrice"
            :min="0"
            :controls="false"
          />
        </el-form-item>
        <el-form-item label="价格" prop="currentPrice">
          <el-input-number
            v-model="form.currentPrice"
            :min="0"
            :controls="false"
          />
        </el-form-item>
        <el-form-item label="分组" prop="groupId">
          <el-select v-model="form.groupId" placeholder="请选择">
            <el-option
              clearable
              v-for="item in groupList"
              :label="item.name"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="优惠活动" prop="promotionId">
          <el-select v-model="form.promotionId" placeholder="请选择">
            <el-option
              clearable
              v-for="item in activityList"
              :label="item.name"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="简介" prop="remark">
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
import { subscribeAdd, subscribeEdit } from '@/api/subscription'
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
    groupList: { type: Array, default: [] }, // 分组
    activityList: { type: Array, default: [] }, // 优惠活动
  },
  data() {
    return {
      visible: false,
      form: {
        name: '',
        currentPrice: 0,
        originalPrice: 0,
        groupId: '',
        promotionId: '',
        remark: '',
      },
    }
  },
  created() {
    this.noRender = {
      rules: {
        name: [{ required: true, trigger: ['change'], message: '不能为空' }],
        currentPrice: [
          { required: true, trigger: ['change'], message: '不能为空' },
        ],
        originalPrice: [
          { required: true, trigger: ['change'], message: '不能为空' },
        ],
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
          name: data.name,
          remark: data.remark,
          currentPrice: data.currentPrice,
          originalPrice: data.originalPrice,
          groupId: data.groupId,
        }
      } else {
        this.form = {
          name: '',
          currentPrice: 0,
          originalPrice: 0,
          groupId: '',
          promotionId: '',
          remark: '',
        }
      }
      this.visible = !this.visible
    },
    // 确认按钮
    confirm() {
      this.$refs.formRef.validate().then(() => {
        if (this.form.hasOwnProperty('id')) {
          subscribeEdit(this.form).then(() => {
            this.switcher()
            this.refresh()
          })
        } else {
          subscribeAdd(this.form).then(() => {
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
