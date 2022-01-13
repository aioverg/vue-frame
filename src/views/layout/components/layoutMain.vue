<template>
  <div id="layout-main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'LayoutMain',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#layout-main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>