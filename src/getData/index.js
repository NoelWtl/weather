// 封装请求数据api的函数
// 引入axios
import axios from 'axios'

// 设置axios的基本配置
let $http = axios.create({
  // 基础的url地址
  baseURL: 'https://free-api.heweather.com/s6/weather'
})
// 请求数据的列表
function getData (val) {
  // 设置对象合并的方法
  let newVal = Object.assign({
    location: '广州',
    key: '88a186ee4946405184a7fc2d5f2e56ba'
  }, val)
  // 返回新的数据给函数
  return $http.get('', {
    // 请求的方式
    method: 'get',

    // 方法对应的传参
    params: newVal
  })
}
// 暴露组件
export { getData }
