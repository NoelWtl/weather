<template>
  <div id="wether">
    <!-- loading组件 -->
    <loading v-if="!pi.length"></loading>
    <div v-else>
      <div class="bg-color"></div>
      <div class="content">
        <div class="wether-header">
          <h3>{{basic.admin_area}}·{{basic.location}}</h3>
          <span>{{ basic.cnty }}</span>
          <span>时区:{{ basic.tz }}</span>
          <p>更新时间:{{update.loc}}</p>
        </div>
        <div class="city">
          <select id="choosePro" onmousedown="if(this.options.length>6){this.size=6}" onblur="this.size=0" onchange="this.size=0" v-model="Check" v-on:change="getCity">
            <!-- 默认值 -->
            <option value="one">--请选择--</option>
            <option v-for="(value,index) in city" :key="index" :value="value.pro_zh">{{value.pro_zh}}</option>
          </select>
          <select id="choosect" onmousedown="if(this.options.length>0){this.size=7}" onblur="this.size=0" onchange="this.size=0" v-model="CheckName" v-on:change="getCityNaMe">
            <option value="one">--请选择--</option>
            <option v-for="(value,index) in citySi" :key="index" class="Option" :value="value.city_zh">{{value.city_zh}}</option>
          </select>
        </div>
        <div class="show-weather">
          <p>
            <img src="../assets/images/Colud.png" alt="">
            <span>{{now.cond_txt}}</span>
          </p>
          <div class="litle">
            <span></span>
            <span>体感温度:{{now.fl}}</span>
            <span>风力:{{now.wind_sc}}</span>
          </div>
          <div class="big-show">
            <span>{{now.tmp}}°</span>
            <div class="chessge">
              <span class="Hs" onclick="Transform()">C</span>
              <span class="Sh">F</span>
            </div>
          </div>
          <p class="author">© by Steamer Lee on Winat</p>
          <p class="height-hot">一周最高温度曲线图</p>
          <!-- 图标插件位置 -->
          <div id="main"></div>
        </div>
        <!-- 未来八个小时的预计天气 -->
        <div class="weather-list-big">
          <h3>今日小时天气预报</h3>
          <div class="weather-list">
            <ul>
              <li v-for="(value,index) in nowData" :key="index">
                <!-- 每3小时的时间 -->
                <span>{{value.time.slice(value.time.length - 5)}}</span>
                <!-- 温度对应的天气状况图片 -->
                <img :src="require('@/assets/images/weather/'+ value.cond_code +'.png')" alt="">
                <!-- 温度显示 -->
                <p>{{value.tmp}}℃</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 天气细节 -->
        <div class="weather-detail">
          <!-- 头部信息 -->
          <div class="detail-content">
            <p class="detail-header">本日细节</p>
            <!-- 天气状况大图 -->
            <div class="detail-big" v-for="(value,index) in pi" :key="index">
              <img :src="require('@/assets/images/weather/'+ value.now.cond_code +'.png')" alt="">
              <!-- 天气状况详情 -->
              <div class="detail-list">
                <ul>
                  <li>
                    <span>{{lifeStyle.brf}}</span>
                    <span>风速 {{now.wind_spd}}</span>
                  </li>
                  <li>
                    <span>相对湿度</span>
                    <span>{{now.hum}}</span>
                  </li>
                  <li>
                    <span>能见度</span>
                    <span>{{now.vis}}公里</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>{{lifeStyle.txt}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入封装好的请求api的函数
import { getData } from '@/getData/index'
// 引入loading组件
import loading from '@/components/loading'
// 引入级联组件
import City from '@/assets/json/city-list'
// 引入插件
var echarts = require('echarts')
// console.log(echarts)
// 暴露组件
export default {
  // 定义数据
  data () {
    return {
      basic: [],
      update: [],
      daily: [],
      // 设置放进图表里面的每天的最高温度
      Newdaily: [],
      Enddaily: [18, 28, 39, 24],
      now: [],
      nowData: [],
      lifeStyle: [],
      pi: [],
      city: [],
      citySi: [],
      citySiName: '广州',
      Check: 'one',
      CheckName: 'one'
    }
  },
  // 生命周期函数
  created () {
    // 调用图标插件app
    // 调用封装好的函数
    this.demo()
    // 给城市级联赋值
    this.city = City
  },
  // 计算属性
  mounted () {
  },
  // 挂载组件
  components: {
    loading
  },
  // 方法
  methods: {
    // 封装一个插件函数
    AppChajian () {
      setTimeout(() => {
        // console.log(this)
        // 获取对象
        var myChart = echarts.init(document.getElementById('main'))
        // console.log(1)
        // 设置样式属性
        let option = {
          xAxis: {
            // type: 'category',
            // data: ['昨天', '今天', '明天', '后天', '大后天', '次日', '次日'],
            data: ['昨天', '今天', '明天', '后天', '大后天', '次日', '次日'],
            // name: '本周的温度图',
            // nameLocation: 'start',
            axisLabel: {color: '#fff', fontSize: 14},
            axisTick: {
              show: true
            }
          },
          yAxis: {
            show: true,
            // type: 'value',
            name: '℃',
            nameLocation: 'end',
            nameTextStyle: {
              color: '#fff',
              fontSize: 20
            },
            max: function (value) {
              return value.max + 10
            },
            axisLabel: {color: '#fff', fontSize: 8}
            // data: ['-4', '-3', '-2', '-1', '0', '1', '2', '3', '4']
          },
          series: [{
            data: this.Newdaily,
            // data: ['-4', '-3', '-2', '-1', '0', '1', '2'],
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
          }],
          color: '#4fc08d',
          grid: {
            show: true,
            // x2: 5,
            left: 18,
            // right: 10,
            width: 340,
            backgroundColor: '#fffef9'
          }
        }
        myChart.setOption(option)
      }, 0)
    },
    demo () {
      getData({location: this.citySiName}).then((data) => {
        // 获取总的数据api
        this.pi = data.data.HeWeather6
        // console.log(this.pi)
        // 基础数据的数组
        this.basic = data.data.HeWeather6[0].basic
        // console.log(this.basic.length)
        // 更新情况
        this.update = data.data.HeWeather6[0].update
        // 设置未来的天气情况(只能获取到三天的情况)
        this.daily = data.data.HeWeather6[0].daily_forecast
        // 设置实况天气
        this.now = data.data.HeWeather6[0].now
        // 设置每3小时的天气情况
        this.nowData = data.data.HeWeather6[0].hourly
        // 设置每天的生活指数
        this.lifeStyle = data.data.HeWeather6[0].lifestyle[0]
        // 调用循环数据函数
        for (let i = 0; i < this.daily.length; i++) {
          this.Newdaily.unshift(this.daily[i].tmp_max)
        }
        this.Newdaily.push(18, 20, 23, 26)
        // console.log(this.Newdaily)
        if (this.Newdaily.length) {
          // 调用函数
          this.AppChajian()
        }
      })
    },
    getCity () {
      // 当重新选择省份的时候，市应该初始化显示请选择
      this.CheckName = 'one'
      // 城市赋值
      for (let i = 0; i < City.length; i++) {
        if (City[i].pro_zh === this.Check) {
          this.citySi = City[i].cityList
        }
      }
    },
    getCityNaMe () {
      // 请求的函数参数应该对应显示为选中的城市
      this.citySiName = this.CheckName
      // 初始化视图最高温度的数据
      // 再调用一次函数，获取对应城市的天气
      this.demo()
    }
  }
}
</script>
<style lang="stylus" scoped>
html
  font-size 1rem
#wether
  width 23.4375rem
  margin-top 1.25rem
  background #668EBF
  span,p
     text-shadow .0625rem .0625rem .0625rem rgba(0,0,0,.54)
  .bg-color
    width 100%
    height 100%
    // background :url(../assets/images/weather.jpg) no-repeat
    background-position center
    background-size cover
    -webkit-filter blur(0.3125rem)
    -moz-filter blur(0.3125rem)
    -o-filter blur(0.3125rem)
    -ms-filter blur(0.3125rem)
    filter: blur(0.3125rem)
  .content
    position relative
    width 100%
    &::before
      content ""
      position absolute
      width 0
      height 0
      border-bottom 0.9375rem solid #668EBF
      border-left 0.9375rem solid transparent
      border-right 0.9375rem solid transparent
      top -0.9375rem
      right 0
    &::after
      content ""
      position absolute
      width 0
      height 0
      border-bottom 0.9375rem solid #668EBF
      border-left 0.9375rem solid transparent
      border-right 0.9375rem solid transparent
      top -0.9375rem
      left 0
    .wether-header
      position relative
      width 100%
      padding 1.25rem .75rem
      box-sizing border-box
      h3
        font-size 1.5rem
        color #fff
        padding-bottom .5rem
      span
        color #fff
        font-size .875rem
      p
        padding-top 0.5rem
        color #fff
        font-size 0.75rem
    .show-weather
      width 100%
      height auto
      padding-top 3.75rem
      p
        width 100%
        box-sizing border-box
        padding 0 0.75rem
        display flex
        align-items center
        img
          width 2rem
          height 2rem
        span
          font-size 1.1375rem
          color #fff
          padding-left 1.25rem
      .litle
        width 100%
        box-sizing border-box
        padding 0 .75rem
        &>span:first-child
          padding-left 1.5625rem
        span
          font-size:.875rem;
          color #fff;
          padding:0 .375rem
      .big-show
        width:100%;
        height:auto;
        box-sizing:border-box;
        padding:0 0.75rem;
        padding-top:0.625rem;
        padding-bottom:.625rem
        display:flex;
        &>span
          font-size:5rem;
          color:#fff;
          text-align:center;
          line-height:6.625rem;
          text-shadow .0625rem .0625rem .0625rem rgba(0,0,0,.54)
        .chessge
          width:1.375rem
          display:flex;
          flex-direction column
          justify-content:flex-end;
          span
            display:block;
            font-size:1.25rem;
            color:#fff;
            text-align:center;
            font-weight 600
          span+span
            padding-top:1.25rem;
            color:  #878c93
      .author
        justify-content:flex-end
        font-size:0.75rem;
        color:#fff
      .height-hot
        width:100%;
        height:auto;
        font-size:.75rem
        color:#fff;
        font-weight:0
      #main
        width:23.4375rem;
        height:18.75rem
    .city
      position:relative
      width:100%;
      box-sizing:border-box
      padding:0 .75rem
      #choosePro
        position:absolute;
        width:83px;
        background:#668ebf
        color:#fff;
        outline:none
        border:none;
        option
          display:block
          width:100%;
          height:100%;
      #choosect
        position:absolute
        top:0
        left:95px
        width:83px;
        background:#668ebf
        color:#fff;
        outline:none
        border:none;
        option
          display:block
          width:100%;
          height:100%;
    .weather-list-big
      width:100%;
      box-sizing:border-box
      padding:0 .625rem;
      h3
        width:100%;
        font-size:.75rem;
        color:#fff;
        padding-bottom:0.3125rem;
        display:flex;
        align-items:center;
        img
          width:1.5rem;
          height:1.5rem;
          padding-left:.3125rem
      .weather-list
        width:100%;
        height:auto;
        background:rgba(0,0,0,.1);
        box-sizing:border-box
        overflow:hidden;
        ul
          width:100%;
          height:100%;
          display:flex;
          overflow-X: scroll;
          li
            width:2.625rem;
            // background:red
            display:flex;
            justify-content center
            flex-wrap:wrap
            padding:0.5625rem;
            span
              width:100%;
              font-size:0.875rem;
              color:#fff;
              text-align:center;
            img
              display:block;
              width:1.5rem
              height:1.5rem
              background:#fff;
              margin:.3125rem 0;
              border-radius:20%;
            p
              font-size:0.875rem
              color:#fff;
              text-align:center;
    .weather-detail
      width:100%;
      height:auto;
      box-sizing:border-box;
      padding:0 .625rem
      margin-top:1.25rem;
      padding-bottom:1.25rem;
      .detail-content
        width:100%;
        background:rgba(0,0,0,.24)
        box-sizing:border-box;
        padding:.625rem
        &>p
          width:100%
          font-size:1.125rem
          color:#fff;
          text-shadow .0625rem .0625rem .0625rem rgba(0,0,0,.54)
          border-bottom:.0625rem solid #fff;
          padding-bottom:.5rem
        .detail-big
          display:flex
          img
            width:6.25rem
            height 6.25rem
            background:#fff;
            border-radius:18%;
            margin-top:1.25rem;
          .detail-list
            width:100%;
            height:100%;
            padding:1.25rem 0;
            padding-left:1.25rem;
            box-sizing:border-box
            li
              display:flex;
              justify-content space-between
              padding:0.5625rem 0;
              span
                font-size:0.875rem;
                color #fff;
        &>div:last-child
          width:100%;
          font-size:0.8125rem;
          padding-top:0.9375rem;
          color:#fff;
          line-height:1.125rem
          text-shadow .0625rem .0625rem .0625rem rgba(0,0,0,.54)
</style>
