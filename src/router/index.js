import Vue from 'vue'
import Router from 'vue-router'
// 引入mao组件
import mao from '@/components/mao'
// 引入天气组件
import wether from '@/components/wether'
// 引入地图组件
import map from '@/components/mapper'
// 引入电影组件
import viedo from '@/components/viedo'
// 引入影院组件
import place from '@/components/place'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mao',
      component: mao,
      // 子路由设置
      children: [
        {
          path: '/viedo',
          component: viedo
        },
        {
          path: '/place',
          component: place
        },
        {
          path: '/',
          redirect: '/viedo'
        }
      ]
    },
    // 定义天气组件
    {
      path: '/wether',
      component: wether
    },
    // 定义地图组件
    {
      path: '/mapper',
      component: map
    },
    // 定义默认路由
    {
      path: '/*',
      redirect: '/mao'
    }
  ]
})
