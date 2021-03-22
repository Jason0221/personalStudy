<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 获取路由传递过来的参数 -->
    <h2>{{ $route.params.userName}} --- {{$route.params.id}}</h2>
  </div>
</template>
<script>
export default {
  name: 'child_2',
  data () {
    return {
      msg: 'Hi, I am child_2'
    }
  }
}
</script>
<style scoped>
</style>
