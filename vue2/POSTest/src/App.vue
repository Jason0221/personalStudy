<template>
  <div id="app">
    <leftNav/>
    <router-view/>

  </div>
</template>

<script>
import LeftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components: {LeftNav}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
