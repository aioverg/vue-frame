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
        <el-form-item label="用户" prop="userId">
          <el-input v-model="form.userId" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-input v-model="form.status" />
        </el-form-item>
        <el-form-item label="创建时间" prop="createDate">
          <el-input v-model="form.createDate" />
        </el-form-item>
        <el-form-item label="更新时间" prop="updateDate">
          <el-input v-model="form.updateDate" />
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input
            v-model="form.content"
            type="textarea"
            :rows="2"
            show-word-limit
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
export default {
  name: "SubscriptionEdit",
  props: {
    data: null, // 数据
    title: { type: String, default: "标题" }, // 标题
    type: { type: String, default: "READ" }, // 表单类型, ADD新增 | MODIFY修改 | READ只读
    showFooter: { type: Boolean, default: true }, // 是否显示底部
    showCancel: { type: Boolean, default: true }, // 是否显示取消按钮
    showConfirm: { type: Boolean, default: true }, // 是否显示确认按钮
  },
  data() {
    return {
      visible: false,
      form: {
        userId: "",
        content: "",
        status: "",
        createDate: "",
        deleteDate: "",
        updateDate: "",
      },
    };
  },
  created() {
    this.noRender = {
      rules: {
        // text: [{ required: true, trigger: ["change"], message: "不能为空" }],
      },
    };
  },
  methods: {
    // 开始关闭弹窗
    switcher(data) {
      if (this.visible) {
        this.visible = !this.visible;
        return;
      }
      if (data) {
        this.form = data;
      }
      this.visible = !this.visible;
    },
    // 确认按钮
    confirm() {
      this.switcher();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/styles/form.scss";
</style>