/* eslint-disable camelcase */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import child_1 from '@/components/child_1'
import child_2 from '@/components/child_2'
import Param from '@/components/Param'

Vue.use(Router)

export default new Router({
  // 路由配置区域, 用来设置地址栏中的路由对应哪个组件
  routes: [
    {
      path: '/',
      name: 'HelloWorld111',
      component: HelloWorld
    },
    {
      path: '/hi',
      name: 'hi', // 有子路由时, 这里的name是不生效的.需要在路由中添加
      component: Hi,
      // 子路由, 在父级路由下面, 添加 children
      children: [
        {path: '/', name: 'hi params', component: Hi},
        {path: 'hi1', name: '123', component: child_1}, // 子路由的path, 前面不加/
        {path: 'hi2', name: 'aaa', component: child_2}
      ]
    },
    // 路由传参
    {
      path: '/params/:newsID/:newsTitle', // 设置接收的参数名
      component: Param
    },
    // 路由重定向
    {
      path: '/jason',
      redirect: '/'
    }
  ]
})
