<template>
  <div id="app">
    <div class="header">
      <img src="@/assets/images/menu.png" onclick="Click">
    </div>
    <div class="content">
      <div class="logo">
        <img src="@/assets/images/1.png">
      </div>
      <div class="router">
        <router-link to="/mao" class="link">猫眼电影</router-link>
        <router-link to="/mapper" class="link">Music</router-link>
        <router-link to="/wether" class="link">天气</router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// 暴露组件
export default {
  name: 'App',
  // 挂载组件
  components: {
    // 挂载loading组价
  }
  // 生命周期
  // 方法
}
</script>

<style lang="stylus" scoped>
html
  font-size 1rem
  overflow-x hidden
.header
  width 23.4375rem
  height 2.5rem
  background #fff
  display flex
  align-items center
  box-sizing border-box
  padding 0 0.75rem
  &>img
    width 1.5rem
    height 1.5rem
.content
  width 100%
  height auto
  .logo
    width 100%
    height auto
    display flex
    justify-content center
    align-items center
    padding-top 1.875rem
    padding-bottom .9375rem
    img
      display block
      widows 11.25rem
      height 8.75rem
  .title
    text-align center
    line-height 1.5625rem
    color #333
    font-weight 400
    font-size 1.5625rem
    padding 0.625rem 0
    padding-bottom 0.9375rem
  .router
    width 100%
    height auto
    display flex
    justify-content center
    .link
      display block
      padding 0.25rem 1.875rem
      height 1.875rem
      background #4fc08d
      color #fff
      font-size 0.875rem
      display flex
      justify-content center
      align-items center
      border-radius 1.875rem
      margin-left 0.625rem
</style>
