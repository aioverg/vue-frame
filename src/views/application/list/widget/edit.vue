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
        label-width="100px"
        :disabled="type === 'READ'"
      >
        <el-form-item label="名字" prop="name">
          <el-input v-model="form.name" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="订阅" prop="subscribeId">
          <el-select v-model="form.subscribeId" placeholder="请选择">
            <el-option
              clearable
              v-for="item in subscribeList"
              :label="item.name"
              :value="item.id"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="访问URL" prop="url">
          <el-input v-model="form.url" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="form.status" placeholder="请选择">
            <el-option
              clearable
              v-for="item in statusList"
              :label="item.label"
              :value="item.key"
              :key="item.key"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="代理" prop="userAgent">
          <el-select v-model="form.userAgent" placeholder="请选择">
            <!-- <el-option
              clearable
              v-for="item in proxyList"
              :label="item.username"
              :value="item.id"
              :key="item.id"
            ></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="浏览器高度" prop="height">
          <el-input-number
            v-model="form.height"
            :min="0"
            :controls="type !== 'READ'"
          />
        </el-form-item>
        <el-form-item label="浏览器宽度" prop="width">
          <el-input-number
            v-model="form.width"
            :min="0"
            :controls="type !== 'READ'"
          />
        </el-form-item>
        <el-form-item label="语言" prop="language">
          <el-select v-model="form.language" placeholder="请选择">
            <!-- <el-option label="label" value="value"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="操作系统" prop="os">
          <el-select v-model="form.os" placeholder="请选择">
            <!-- <el-option label="label" value="value"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            v-model="form.remark"
            type="textarea"
            :rows="2"
            show-word-limit
            :maxlength="300"
            placeholder="请输入"
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
import { appAdd, appEdit } from "@/api/application";
export default {
  name: "ApplicationAdd",
  props: {
    data: null, // 数据
    title: { type: String, default: "标题" }, // 标题
    type: { type: String, default: "MODIFY" }, // 表单类型, ADD新增 | MODIFY修改 | READ只读
    showFooter: { type: Boolean, default: true }, // 是否显示底部
    showCancel: { type: Boolean, default: true }, // 是否显示取消按钮
    showConfirm: { type: Boolean, default: true }, // 是否显示确认按钮
    refresh: { type: Function, default: () => {} }, // 刷新函数
    statusList: {type: Array, default: []}, // 状态列表
    subscribeList: {type: Array, default: []}, // 订阅
    proxyList: {type: Array, default: []}, // 代理
  },
  data() {
    return {
      visible: false,
      form: {
        name: "",
        username: "",
        password: "",
        subscribeId: "",
        url: "",
        status: "",
        userAgent: "",
        height: null,
        width: null,
        language: "",
        os: "",
        remark: "",
      },
    };
  },
  created() {
    this.noRender = {
      rules: {
        name: [{ required: true, trigger: ["change"], message: "不能为空" }],
        subscribeId: [{ required: true, trigger: ["change"], message: "不能为空" }],
        status: [{ required: true, trigger: ["change"], message: "不能为空" }],
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
          name: data.name,
          username: data.username,
          password: data.password,
          subscribeId: data.subscribeId,
          url: data.url,
          status: data.status,
          userAgent: data.userAgent,
          height: data.height || null,
          width: data.width || null,
          language: data.language,
          os: data.os,
          remark: data.remark,
        };
      } else {
        this.form = {
          name: "",
          username: "",
          password: "",
          subscribeId: "",
          url: "",
          status: "",
          userAgent: "",
          height: null,
          width: null,
          language: "",
          os: "",
          remark: "",
        };
      }
      this.visible = !this.visible;
    },
    // 确认按钮
    confirm() {
      this.$refs.formRef.validate().then(() => {
        if (this.form.hasOwnProperty("id")) {
          appEdit(this.form).then(() => {
            this.switcher();
            this.refresh();
          });
        } else {
          appAdd(this.form).then(() => {
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