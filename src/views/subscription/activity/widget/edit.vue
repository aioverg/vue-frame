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
        <el-form-item label="活动名称" prop="text">
          <el-input v-model="form.name" placeholder="活动名称" />
        </el-form-item>
        <el-form-item label="活动规则" prop="number">
          <el-form-item label="满" prop="_full">
            <el-input-number
              v-model="form._full"
              :min="0"
              :controls="false"
            />
          </el-form-item>
          <el-form-item label="减" prop="_reduce">
            <el-input-number
              v-model="form._reduce"
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
        <el-button @click="switcher" v-if="showCancel">取消</el-button>
        <el-button type="primary" @click="confirm" v-if="showConfirm"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
import {activityAdd} from '@/api/subscription'
export default {
  name: "SubscriptionEdit",
  props: {
    data: null, // 数据
    title: { type: String, default: "标题" }, // 标题
    type: { type: String, default: "MODIFY" }, // 表单类型, ADD新增 | MODIFY修改 | READ只读
    showFooter: { type: Boolean, default: true }, // 是否显示底部
    showCancel: { type: Boolean, default: true }, // 是否显示取消按钮
    showConfirm: { type: Boolean, default: true }, // 是否显示确认按钮
    refresh: {type: Function, default: () => {}} // 刷新函数
  },
  data() {
    return {
      visible: false,
      form: {
        id: '',
        name: '',
        remark: '',
        rule: '',
        type: "full_sale",
        _full: 0,
        _reduce: 0,
      },
    };
  },
  created() {
    this.noRender = {
      rules: {
        name: [{ required: true, trigger: ["change"], message: "不能为空" }],
      },
    };
  },
  methods: {
    // 开启关闭弹窗
    switcher(data) {
      if(data){
        const rule = JSON.parse(data.rule)
        this.form = {
          id: data.id,
          name: data.name,
          remark: data.remark,
          rule: '',
          type: data.type,
          _full: rule.full || 0,
          _reduce: rule.reduce || 0,
        }
      }
      this.visible = !this.visible;
    },
    // 确认按钮
    confirm() {
      this.$refs.formRef
        .validate()
        .then(() => {
          console.log("校验通过");
          this.form.rule = `${this.form._full} - ${this.form._reduce}`
          activityAdd(this.form).then(() => {
            this.switcher()
            this.refresh()
          })
        })
        .catch((error) => {
          console.log("校验失败");
        });
    }
  },
};
</script>
<style lang="scss" scoped>
@import "~@/styles/form.scss";
</style>