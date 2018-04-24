<template>
  <div id="place">
    <loading v-if="!placeTopics.length"></loading>
    <ul v-else>
      <li v-for="(value, index) in placeTopics" :key="index">
        <div class="place-title">
          <p>{{ value.nm }}</p>
          <span>{{ value.sellPrice }}</span>
          <span class="small">元起</span>
        </div>
        <div class="content">
          <a href="">{{ value.addr }}</a>
          <span>详情</span>
        </div>
        <div class="seat">
          <p>座</p>
          <p v-if="value.imax">杜比全景声厅</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// 引入loading组件
import loading from '@/components/loading'
// 引入影院数据
import placeJson from '@/assets/json/place'
// 暴露组件
export default {
  name: 'place',
  // 定义数据
  data () {
    return {
      placeTopics: []
    }
  },
  // 挂载组件
  components: {
    // 挂载loading组件
    loading
  },
  // 生命周期函数
  created () {
    // 调用请求数据的函数
  },
  // 计算属性
  mounted () {
    this.getPlaceData()
  },
  // 方法
  methods: {
    getPlaceData () {
      setTimeout(() => {
        this.placeTopics = placeJson
      }, 800)
    }
  }
}
</script>
<style lang="stylus" scoped>
html
  font-size 1rem
  #place
    width 100%
    height auto
    ul
      width 100%
      height auto
      li
        width 100%
        box-sizing border-box
        background #fff
        padding 0.625rem .625rem
        border-bottom .0625rem solid #e0e0e0
        .place-title
          width 100%
          height auto
          display flex
          p
          font-size 1.0625rem
          color #000
          span:nth-child(2)
            font-size 1rem
            color #e54847
            padding-left .625rem
          .small
            font-size .75rem
            align-self flex-end
            color #e54847
            padding-left:.1875rem
        .content
          width 100%
          height auto
          display flex
          padding-top 1rem
          padding-bottom .625rem
          display flex
          justify-content space-between
          a
            display:block
            width:18.125rem
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            font-size: 0.875rem
            color #666
          span
            font-size 0.75rem
            color #999
            padding .3125rem
            background #e54847
            color #fff
            border-radius:.3125rem
        .seat
          width 100%
          height auto
          display flex
          padding-top .1875rem
          p
            padding 0.1875rem
            margin-right:.3125rem
            font-size .75rem
            color #589DAF
            border .0625rem solid #589DAF
            border-radius 0.3125rem
            text-align center
            line-height:1
</style>
