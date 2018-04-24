<template>
  <div id="loading">
    <img :src="require('@/assets/images/loading.gif')" alt="">
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
html
  font-size 1rem
  #loading
    width:100%
    height:auto;
    img
      display:block;
      width:100%;
      background:#fff
</style>
