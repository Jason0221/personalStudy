/* eslint-disable camelcase */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Error from '@/components/error'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉url 中的#号
  // 路由配置区域, 用来设置地址栏中的路由对应哪个组件
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/count',
      name: 'Count',
      component: Count
    },
    {
      path: '*', // 404页面路由
      component: Error
    }
  ]
})
