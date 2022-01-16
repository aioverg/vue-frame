<template>
  <div id="layout-aside">
    <div class="title" @click="home">闪电树熊</div>
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
            <span style="padding-left: 28px">{{item1.meta.title}}</span>
          </template>
        </el-menu-item>
        <el-sub-menu v-else :key="item1.name" :index="item1.name">
          <template #title>
            <kl-icon :iconName="item1.meta.icon" />
            <span>{{item1.meta.title}}</span>
          </template>
          <el-menu-item
            v-for="item2 in item1.children"
            :key="item2.name"
            :index="item2.name"
            :route="item2"
          >
            <span style="padding-left: 22px">{{item2.meta.title}}</span>
          </el-menu-item>
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
  methods: {
    home(){
      this.$router.push('/home')
    },
    init(){
      this.active = this.$router.currentRoute._value.name
    }
  },
  mounted () {
    this.init()
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
    line-height: 60px;
    font-size: 18px;
    background-color: #4b7efe;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
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