<template>
  <el-dialog v-model="visible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer v-if="footer">
      <span class="dialog-footer">
        <el-button @click="switcher" v-if="cancel">取消</el-button>
        <el-button type="primary" @click="switcher" v-if="confirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {
  name: "SubscriptionEdit",
  props: {
    data: null,
    title: "",
    footer: { type: Boolean, default: true },
    cancel: { type: Boolean, default: true },
    confirm: { type: Boolean, default: true },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    switcher() {
      this.visible = !this.visible;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>