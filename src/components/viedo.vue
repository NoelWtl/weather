<template>
  <div id="viedo">
    <!--  -->
    <loading v-if="!topics.length"></loading>
    <ul v-else>
      <li v-for="(value,index) in topics" v-bind:key="index">
          <img v-lazy="value.img">
          <div class="list-center">
            <a href="">{{ value.nm }}</a>
            <span v-if="value.threed" class="ThreeD">3D</span>
            <span v-else class="ThreeD">{{ (value.ver).slice(0,2)}}</span>
            <span v-if="value.imax" class="Imax">IMAX</span>
            <p>{{value.cat}}</p>
            <p v-if="value.star === '' ">主演:{{value.dir}}</p>
            <p v-else>主演:{{value.star}}</p>
            <p style="color:#999">{{ value.showInfo}}</p>
          </div>
          <span class="fenshu">{{value.sc}}分</span>
          <div class="buy">购票</div>
        </li>
      </ul>
  </div>
</template>
<script>
// 引入loading组件
import loading from '@/components/loading'
// 引入videojson文件
import json from '@/assets/json/topics'
// 引入axios
// import axios from 'axios'
// 引入封装好的jsonp请求的函数
// import { getDataJsonp } from '@/getData/Getjsonp'
// import { getDataTwo } from '@/getData/getAxios'
// 暴露组件
export default {
  name: 'viedo',
  data () {
    return {
      topics: []
    }
  },
  // 生命周期函数
  created () {
    // 调用封装好的jsonp请求函数
    // getDataJsonp().then((data) => {
    //   console.log(data)
    // })
    // 调用axios请求数据
    // getDataTwo().then((data) => {
    //   console.log(data)
    // })
    this.getVideoData()
  },
  // 计算属性
  mounted () {
    // 调用方法
  },
  // 方法
  methods: {
    getVideoData () {
      setTimeout(() => {
        this.topics = json
        // console.log(this.topics)
      }, 800)
    }
  },
  // 挂载组件
  components: {
    loading
  }
}
</script>
<style lang="stylus" scoped>
  ul
    width 100%;
    height auto
    background:#fff
    li
      position relative
      display flex;
      align-items center
      padding-top 0.625rem
      &>img
        width 4.0175rem
        height 5.625rem
      .fenshu
        position absolute
        top 0.875rem
        right 0
        color #FFB400
      .buy
        position absolute
        bottom 0.625rem
        right 0
        padding 0.375rem 0.625rem
        background #EF4238
        font-size 0.875rem
        color #fff
        border-radius:0.25rem;
      .list-center
        height:100%;
        box-sizing:border-box;
        padding-top:0.1875rem;
        padding-left:0.625rem;
        p
          width:12.5rem;
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          padding-top:0.3125rem;
          color:#666;
          font-size:0.875rem;
        a
          font-size:1.0rem;
          color:#333;
          font-weight:600;
        & .ThreeD
          overflow:hidden;
          padding:0.0625rem;
          color:#fff;
          font-size:0.75rem;
          background:#8BB7CE
          border-radius:0.3125rem;
          box-sizing:border-box;
        & .Imax
          padding:0 0.0625rem;
          box-sizing:border-box;
          background:#fff;
          font-size:0.75rem;
          color:#8BB7CE
          border:0.0625rem solid #8BB7CE
          border-radius:0.1875rem;
</style>
