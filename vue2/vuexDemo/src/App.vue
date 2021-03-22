<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
    }
  },
  methods: {

  }
}
</script>

<style>
.fade-enter{
  opacity: 0;
}

.fade-leave{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-leave-active{
  transition: opacity 0.5s
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left{
  width: 50%;
  height: 300px;
  float: left;
  background: #ccc;
}
.right{
  width: 50%;
  height: 300px;
  float: left;
  background: lightblue;
}
</style>
