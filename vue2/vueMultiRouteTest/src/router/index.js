/* eslint-disable camelcase */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import child_1 from '@/components/child_1'
import child_2 from '@/components/child_2'
import Error from '@/components/error'
Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉url 中的#号
  // 路由配置区域, 用来设置地址栏中的路由对应哪个组件
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: child_1,
        right: child_2
      }
    },

    {
      path: '/child_1',
      component: child_1,
      alias: '/jason', // 路由别名, 作用是url里为aliias, 但是实际路由指向 path 及 /child_1
      // 方法一:  在 路由index中写
      beforeEnter: (to, from, next) => {
        console.log('准备进入 child_1')
        console.log(to)
        console.log(from)
        next() // 有这一行, 才会正常跳转, 里面也可以传参  true/false 或者直接传路由地址, 跳转到新的地址
      }
    },
    {
      path: '/child_2',
      component: child_2
    },
    {
      path: '*', // 404页面路由
      component: Error
    }
  ]
})
