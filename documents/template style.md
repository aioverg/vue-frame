# 组件内样式

- 修改 `Element` 组件的样式使用 `::v-deep` 样式穿透。

- 使用内联样式时使用 `<style scope>` 避免样式污染。

- 组件内引入外部样式 

  ```html
  <style lang='scss' scope>
      @impoer "~@/url"
  </style>
  // 注意引入 scss 文件且使用路径别名时前面要加上 ~ 符号
  ```

-  

等多详情查看 `vue-loader` 文档。