<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <!-- 路由跳转按钮, 使用to 属性, 设置跳转的url地址 -->
      <router-link to="/">首页</router-link>
      <router-link to="/hi">Hi 页面</router-link>
      <!-- 子路由的添加 -->
      <router-link to="/hi/hi1">Hi1 页面</router-link>
      <!-- 路由传参的第二种方式 -->
      <router-link :to="{name: 'hi2', params: {userName: 'jason', id: '999'}}">Hi2 页面</router-link>
    </div>
    <!-- 路由传参第一种方式: name传参, 需要在路由配置中, 添加name属性, 激活路由name的值, 就会在这里显示 -->
    <!-- 不过这种方式, 基本上不用,而是使用第二种方式 -->
    <p>{{ $route.name }}</p>

    <!-- 路由控制的区域, 激活的组件会替换这个标签进行显示 -->
    <router-view/>
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
