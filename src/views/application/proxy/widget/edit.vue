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
        <el-form-item label="名字" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item label="地址" prop="host">
          <el-input v-model="form.host" />
        </el-form-item>
        <el-form-item label="端口" prop="port">
          <el-input v-model="form.port" />
        </el-form-item>
        <el-form-item label="协议" prop="protocol">
          <el-input v-model="form.protocol" />
        </el-form-item>
        <!-- <el-form-item label="备注" prop="remark">
          <el-input
            v-model="form.remark"
            type="textarea"
            :rows="2"
            show-word-limit
            :maxlength="300"
          />
        </el-form-item> -->

        <!-- <el-form-item label="选择" prop="numText">
          <el-select v-model="form.select" placeholder="Select">
            <el-option label="label" value="value"></el-option>
          </el-select>
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
import { proxyAdd, proxyEdit } from "@/api/application";
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
        username: "",
        password: "",
        host: "",
        port: "",
        protocol: "",
      },
    };
  },
  created() {
    this.noRender = {
      rules: {
        username: [
          { required: true, trigger: ["change"], message: "不能为空" },
        ],
        password: [
          { required: true, trigger: ["change"], message: "不能为空" },
        ],
        host: [{ required: true, trigger: ["change"], message: "不能为空" }],
        port: [{ required: true, trigger: ["change"], message: "不能为空" }],
        protocol: [{ required: true, trigger: ["change"], message: "不能为空" }],
      },
    };
  },
  methods: {
    // 开始关闭弹窗
    switcher(data) {
      if(this.visible){
        this.visible = !this.visible;
        return
      }
      if (data) {
        this.form = {
          id: data.id,
          username: data.username,
          password:  data.password,
          host:  data.host,
          port:  data.port,
          protocol:  data.protocol,
        };
      } else {
        this.form = {
          username: "",
          password: "",
          host: "",
          port: "",
          protocol: "",
        };
      }
      this.visible = !this.visible;
    },
    // 确认按钮
    confirm() {
      this.$refs.formRef.validate().then(() => {
        if (this.form.hasOwnProperty("id")) {
          proxyEdit(this.form).then(() => {
            this.switcher();
            this.refresh();
          });
        } else {
          proxyAdd(this.form).then(() => {
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