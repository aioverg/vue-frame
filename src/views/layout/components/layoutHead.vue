<template>
  <div id="layout-head">
    <el-button type="text" style="margin-left: 20px" @click="logout()">退出</el-button>
    <el-avatar :size="30" src="https://empty" @error="errorHandler">
      <kl-icon icon-name="icon-avatar" />
    </el-avatar>
    
  </div>
</template>

<script>
export default {
  name: "LayoutHead",
  methods: {
    logout() {
      this.$store.dispatch('account/logout')
    }
  }
};
</script>

<style lang="scss" scoped>
#layout-head {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  overflow: hidden;
}
</style>