import Vue from 'vue'
import App from './App'
import router from './router'
// 引入重置样式文件
import '@/assets/css/reset.css'
// 引入字体文件
import '@/assets/fonts/iconfont.css'
// 引入图片懒加载组件
import VueLazyload from 'vue-lazyload'
// console.log(VueLazyload)
Vue.config.productionTip = false

// 定义图片懒加载
Vue.use(VueLazyload, {
  // 默认显示的图片
  loading: require('@/assets/images/1.png'),
  // 错误的时候显示的图片
  error: require('@/assets/images/error.jpg')
})
// 定义适配所有手机设备屏幕的函数
function changeFontSize () {
  var Width = 375
  var FontSize = 16

  // 获取当前设备的屏幕宽度
  var newWidth = document.documentElement.clientWidth || document.body.clientWidth
  // 推算新设备的HTML的font-size的值
  var newFontSize = newWidth * FontSize / Width
  // 把新的fontSize的值加入到新设备的HTML里面：
  document.documentElement.style.fontSize = newFontSize + 'px'
}

// 初始化调用屏幕自适应函数：
window.onload = function () {
  changeFontSize()
}
// 当设备的屏幕大小发生改变的时候：调用函数：
window.onresize = function () {
  changeFontSize()
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
