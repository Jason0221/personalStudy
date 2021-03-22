<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <!-- 路由跳转按钮, 使用to 属性, 设置跳转的url地址 -->
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">Hi 页面</router-link>|
     <!-- 这种传参方式不经常使用 -->
      <router-link to="/hi/hi1">hi1 page</router-link> |
      <!-- 一般会使用这种方式来传参
        使用 :to 来绑定
        使用name 来确定路由地址, 这里的name 与路由中的name来一一对应.
        利用 params 来传递参数
       -->
      <router-link :to="{name: 'aaa', params: {userName: 'guohao',id: '123'}}" >
        hi2 page
      </router-link>
      <br>
      <router-link to="/params/198/jasonWeb"> url 传参</router-link>
      <router-link to="/jason"> go Home</router-link>
    </div>
    <!-- 不过这种方式, 基本上不用,而是使用第二种方式 -->
    <p>{{ $route.name }}</p>

    <!-- 路由控制的区域, 激活的组件会替换这个标签进行显示 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
