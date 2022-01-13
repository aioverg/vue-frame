<template>
  <div id="layout">
    <el-container>
      <el-aside>
        <layout-aside />
      </el-aside>
      <el-container>
        <el-header>
          <layout-head />
        </el-header>
        <el-main>
          <layout-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { LayoutAside, LayoutMain, LayoutHead } from './components'
export default {
  name: 'Layout',
  components: {
    LayoutMain,
    LayoutAside,
    LayoutHead
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .el-container {
    height: 100%;
  }
  .el-aside {
    width: 170px;
  }
  .el-header {
    box-shadow: 0px 2px 6px 0px rgba(175, 186, 200, 0.3);
  }
  .el-main {
    background-color: #f2f4f7;
  }
}
</style>
