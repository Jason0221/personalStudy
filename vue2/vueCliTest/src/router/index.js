import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
Vue.use(Router)

export default new Router({
  // 路由配置区域, 用来设置地址栏中的路由对应哪个组件
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      name: 'hi', // 有子路由时, 这里的name是不生效的.需要在路由中添加
      component: Hi,
      // 子路由, 在父级路由下面, 添加 children
      children: [
        {path: '/', name: '/hi/', component: Hi},
        {path: 'hi1', name: '/hi/hi1', component: Hi1}, // 子路由的path, 前面不加/
        {path: 'hi2', name: 'hi2', component: Hi2}
      ]
    }
  ]
})
