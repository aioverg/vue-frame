<template>
  <div id="layout-head">
    <el-button type="text" style="margin-left: 20px">退出</el-button>
    <el-avatar :size="30" src="https://empty" @error="errorHandler">
      <el-icon><avatar /></el-icon>
    </el-avatar>
    
  </div>
</template>

<script>
export default {
  name: "LayoutHead",
  data() {
    return {};
  },
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