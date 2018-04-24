<template>
  <div id="music">
    <!-- 加载组件 -->
    <loading v-if="!topics.length"></loading>
    <div v-else>
      <div class="music-header">
        <h3>新歌首发</h3>
      </div>
      <!-- 新歌列表 -->
      <div class="content-list">
        <ul>
          <li v-for="(value, index) in topics" :key="index">
            <img :src="'https://y.gtimg.cn/music/photo_new/T002R90x90M000'+ value.album.mid +'.jpg'" alt="">
            <div class="content-right">
              <!-- 主题曲 -->
              <a :href="'http://i.y.qq.com/v8/playsong.html?ADTAG=newyqq.song&songmid='+ value.mid +'#webchat_redirect'" :title="value.title">{{value.name}}<span>{{value.subtitle}}</span></a>
              <!-- 歌手 -->
              <p>{{value.singer[0].name}}</p>
              <p class="SetTime">发行时间:{{value.time_public}}</p>
            </div>
            <!-- 歌曲时间 -->
            <!-- <div class="time">专辑:{{value.album.name}}</div> -->
            <div class="time">{{Math.floor(value.interval / 60)}}:{{(value.interval/60).toString().slice(1,4) * 60}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// 引入延时加载
import loading from '@/components/loading'
// 引入请求数据的组件
import { getDataJsonp } from '@/getData/Getjsonp'
// 暴露组件
export default {
  name: 'mapper',
  // 定义数据
  data () {
    return {
      topics: []
    }
  },
  // 生命周期函数
  created () {
    // 调用的方法
    getDataJsonp().then((data) => {
      // console.log(data)
      // 赋值
      this.topics = data.new_song.data.song_list
      // console.log(this.topics)
    })
  },
  // 挂载组件
  components: {
    loading
  },
  // 方法
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
html
  font-size 1rem
  span, a, h3
    text-shadow .0625rem .0625rem .0625rem rgba(0,0,0,.54)
  #music
    width: 23.4375rem;
    height: auto;
    margin-top:1.25rem;
    .music-header
      position relative
      width:100%;
      height:2.5rem;
      background #4fc08d
      box-sizing: border-box
      padding: 0 0.75rem
      &::before
        content:"";
        position:absolute;
        width:0;
        height:0;
        border-bottom:0.9375rem solid #4fc08d
        border-left:0.9375rem solid transparent
        border-right:0.9375rem solid transparent
        top:-0.9375rem;
        right:0;
      &::after
        content:"";
        position:absolute;
        width:0;
        height:0;
        border-bottom:0.9375rem solid #4fc08d
        border-left:0.9375rem solid transparent
        border-right:0.9375rem solid transparent
        top:-0.9375rem;
        left:0;
      h3
        height:100%
        font-size:1.125rem;
        color:#Fff;
        line-height:2.5rem;
    .content-list
      width:100%;
      height:auto;
      box-sizing: border-box
      padding: 0 0.75rem
      ul
        width:100%;
        height:100%;
        padding-top:0.625rem
        li
          background:#fff
          display:flex;
          border-bottom:0.0625rem solid #e0e0e0;
          padding-bottom:0.5rem;
          margin-bottom:0.625rem;
          img
            // display:block
            // width:5.625rem
            height:5.625rem;
          .content-right
            width:100%;
            height:100%;
            padding-left:0.625rem;
            box-sizing: border-box
            a
              display:block;
              width:12.5rem;
              overflow:hidden;
              text-overflow:ellipsis
              white-space nowrap
              fonr-size:0.875rem;
              color:#333;
              padding-top:1.25rem;
              padding-bottom:0.9375rem;
            p
              font-size:0.875rem;
              color:#999
            .SetTime
              padding-top:0.625rem;
          .time
            width:31px;
            padding-right:0.625rem;
            box-sizing:border-box
            overflow:hidden
            // text-overflow ellipsis
            // white-space nowrap
            font-size:0.75rem;
            color:#999
            line-height:5.25rem;
</style>
