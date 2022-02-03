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
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="form.nickname" />
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select v-model="form.role" placeholder="Select">
            <el-option label="管理员" value="admin"></el-option>
            <el-option label="普通用户" value="user"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item label="手机" prop="cellphone">
          <el-input v-model="form.cellphone" />
        </el-form-item>
        <!-- <el-form-item label="数字" prop="number">
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
        </el-form-item> -->
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
import { userAdd, userEdit } from "@/api/member";
export default {
  name: "SubscriptionEdit",
  props: {
    data: null, // 数据
    title: { type: String, default: "标题" }, // 标题
    type: { type: String, default: "MODIFY" }, // 表单类型, ADD新增 | MODIFY修改 | READ只读
    showFooter: { type: Boolean, default: true }, // 是否显示底部
    showCancel: { type: Boolean, default: true }, // 是否显示取消按钮
    showConfirm: { type: Boolean, default: true }, // 是否显示确认按钮
    refresh: { type: Function, default: () => {} }, // 刷新函数
  },
  data() {
    return {
      visible: false,
      form: {
        nickname: "",
        username: "",
        role: "user",
        password: "",
        cellphone: "",
      },
    };
  },
  created() {
    this.noRender = {
      rules: {
        username: [
          { required: true, trigger: ["change"], message: "不能为空" },
        ],
        nickname: [
          { required: true, trigger: ["change"], message: "不能为空" },
        ],
        role: [{ required: true, trigger: ["change"], message: "不能为空" }],
        password: [
          { required: true, trigger: ["change"], message: "不能为空" },
        ],
        cellphone: [
          { required: true, trigger: ["change"], message: "不能为空" },
        ],
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
        this.form = {
          id: data.id,
          nickname: data.nickname,
          username: data.username,
          role: data.role,
          password: data.password,
          cellphone: data.cellphone,
        };
      } else {
        this.form = {
          nickname: "",
          username: "",
          role: "user",
          password: "",
          cellphone: "",
        };
      }
      this.visible = !this.visible;
    },
    // 确认按钮
    confirm() {
      this.$refs.formRef.validate().then(() => {
        if (this.form.hasOwnProperty("id")) {
          userEdit(this.form).then(() => {
            this.switcher();
            this.refresh();
          });
        } else {
          userAdd(this.form).then(() => {
            this.switcher();
            this.refresh();
          });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@/styles/form.scss";
</style>