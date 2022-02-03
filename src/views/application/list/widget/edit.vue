<template>
  <el-dialog v-model="visible" :title="title" width="500px" :close-on-click-modal="false">
    <div class="form">
      <el-form
        ref="formRef"
        :model="form"
        :rules="noRender.rules"
        label-width="80px"
        :disabled="type === 'READ'"
      >
        <el-form-item label="文本" prop="text">
          <el-input v-model="form.text" />
        </el-form-item>
        <el-form-item label="数字" prop="number">
          <el-input-number v-model="form.number" :min="0" :controls="type !== 'READ'" />
        </el-form-item>
        <el-form-item label="多行文本" prop="numText">
          <el-input
            v-model="form.numText"
            type="textarea"
            :rows="2"
            show-word-limit
            :maxlength="300"
          />
        </el-form-item>

        <el-form-item label="选择" prop="numText">
          <el-select v-model="form.select" placeholder="Select">
            <el-option label="label" value="value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <template #footer v-if="showFooter">
      <span>
        <el-button @click="switcher" v-if="showCancel">取消</el-button>
        <el-button type="primary" @click="confirm" v-if="showConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  name: "SubscriptionEdit",
  props: {
    data: null, // 数据
    title: { type: String, default: '标题' }, // 标题
    type: { type: String, default: 'MODIFY' }, // 表单类型, ADD新增 | MODIFY修改 | READ只读
    showFooter: { type: Boolean, default: true },  // 是否显示底部
    showCancel: { type: Boolean, default: true },  // 是否显示取消按钮
    showConfirm: { type: Boolean, default: true }, // 是否显示确认按钮
    refresh: { type: Function, default: () => {} }, // 刷新函数
  },
  data () {
    return {
      visible: false,
      form: {
        text: '文本输入框',
        number: 222,
        numText: '多行文本',
        select: 'value'
      }
    };
  },
  created () {
    this.noRender = {
      rules: {
        text: [{ required: true, trigger: ['change'], message: '不能为空', }],
      }
    }
  },
  methods: {
    // 开始关闭弹窗
    switcher () {
      if(this.visible){
        this.visible = !this.visible;
        return
      }
      this.visible = !this.visible;
    },
    // 确认按钮
    confirm () {
      this.$refs.formRef.validate().then(() => {
        console.log('校验通过',)
      }).catch(error => {
        console.log('校验失败')
      })
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/styles/form.scss";
</style>