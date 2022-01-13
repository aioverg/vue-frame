<template>
  <div id="layout-aside">
    <div class="title">标题</div>
    <el-menu
      active-text-color="#ffffff"
      background-color="#2c3d59"
      text-color="rgba(255,255,255,0.5)"
      :default-active="active"
      router
    >
      <template v-for="item1 in menus">
        <el-menu-item
          v-if="item1.name === 'Home'"
          :key="item1.name"
          :route="item1"
          :index="item1.name"
        >
          <template #title>
            <el-icon>
              <component :is="item1.meta.icon"></component>
            </el-icon>
            <span>{{item1.meta.title}}</span>
          </template>
        </el-menu-item>
        <el-sub-menu v-else :key="item1.name" :index="item1.name">
          <template #title>
            <el-icon>
              <component :is="item1.meta.icon"></component>
            </el-icon>
            <span>{{item1.meta.title}}</span>
          </template>
          <el-menu-item
            v-for="item2 in item1.children"
            :key="item2.name"
            :index="item2.name"
            :route="item2"
          >{{item2.meta.title}}</el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'LayoutAside',
  data () {
    return {
      active: 'Home'
    }
  },
  computed: {
    menus () {
      const usedMenus = ['Home', 'Application', 'Member', 'Subscription']
      return this.$router.options.routes.filter(item => {
        return item.name && usedMenus.includes(item.name)
      })
    },
  },
  mounted () {

  },
}
</script>

<style lang="scss" scoped>
#layout-aside {
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    height: 60px;
    background-color: #4b7efe;
  }
  .el-menu {
    flex: 1;
    border: none;
    height: 100%;
  }
  .el-menu {
    box-shadow: 0px 2px 8px 0px rgba(175, 186, 200, 0.3);
  }
}
</style>