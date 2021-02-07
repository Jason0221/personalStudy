<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 获取路由传递过来的参数 -->
    <h2>{{ $route.params.userName}} --- {{$route.params.id}}</h2>
  </div>
</template>
<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi, I am Hi2'
    }
  }
}
</script>
<style scoped>
</style>
