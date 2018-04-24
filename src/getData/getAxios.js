// 封装请求数据api的函数
// 引入axios
import axios from 'axios'

// 设置axios的基本配置
let $http = axios.create({
  // 基础的url地址
  baseURL: 'http://v.juhe.cn/movie/cinemas.movies'
})
// 请求数据的列表
function getDataTwo (val) {
  // 设置对象合并的方法
  let newVal = Object.assign({
    cinemaid: 1188,
    key: '7e35b22492b1b34bdd67c9ab8a12b25b'
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
export { getDataTwo }
