<template>
    <div id="mao">
      <div class="header">
        <span>广州</span>
        <div class="header-center"><a href="" alt="">猫眼电影</a></div>
      </div>
      <!-- 内容开始 -->
      <div class="list">
        <div class="nav">
          <router-link to="/viedo">影片</router-link>
          <router-link to="/place">影院</router-link>
        </div>
        <!-- 定义缓存 -->
        <keep-alive>
          <transition name="Tran">
            <router-view></router-view>
          </transition>
        </keep-alive>
      </div>
    </div>
</template>
<script>
// 引入loading组件
// import loading from '@/components/loading'
// 暴露组件
export default {
  // 定义数据
  data () {
    return {
      topics: []
    }
  },
  name: 'mao',
  created () {},
  // 挂载组件
  components: {
    // loading
  }

}
</script>
<style lang="stylus" scoped>
  html
    font-size:1.0rem;
  #mao
    width:23.4375rem;
    margin-top:1.25rem;
    .header
      position:relative;
      width:100%;
      background:#f1f1f1;
      box-sizing border-box
      padding: 0 0.75rem
      height:2.1875rem;
      display:flex;
      align-items:center;
      border-radius 1.25rem;
      span
        font-size:1.0rem;
        color:#4fc08d;
      div
        position:absolute;
        left:41%;
        top .6875rem
        width:6.25rem;
        margin: 0 auto
        a
          font-size:1.125rem;
          color:#e54847
    .list
      width:100%;
      box-sizing:border-box;
      padding:0 0.75rem;
      .nav
        position:relative;
        width:100%;
        height:1.875rem;
        background:#fff;
        display:flex;
        padding-bottom:0.1875rem;
        border-bottom:0.125rem solid #e0e0e0
        a
          position relative
          display:block
          width:50%;
          height:100%;
          color:#333;
          font-size:0.875rem;
          text-align:center;
          line-height:1.875rem;
          &.router-link-active
            border-bottom:0.1875rem solid #e54847
      // 设置过渡效果
      .Tran
        transform-style: preserve-3d
      .Tran-enter-active {
        animation: bounce-in .5s;
      }
      .Tran-leave-active {
        animation: bounce-in .5s reverse;
      }
      @keyframes bounce-in {
        0% {
          transform: scale(0);
          // transform: translateX(0)
        }
        50% {
          transform: scale(1.1);
          // transform: translateX(-23.4375rem)
        }
        100% {
          transform: scale(1);
          // transform: translateX(-23.4375rem);
        }
      }
</style>
