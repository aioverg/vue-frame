<template>
  <el-icon :size="size" :color="color" :class="class" :style="style" >
    <svg aria-hidden="true">
      <use :xlink:href="`#${iconName}`"></use>
    </svg>
  </el-icon>
</template>

<script>
import "@/assets/icon/iconfont"
export default {
  name: "KlIcon",
  props: {
    iconName: String,
    size: [String, Number],
    color: String,
    class: String,
    style: String,
  }
};
</script>
