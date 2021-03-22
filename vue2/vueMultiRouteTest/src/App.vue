<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{jason}}</p>
    <button @click="goForward">前进</button>
    <button @click="goBack">后退</button>
    <button @click="goHome">回到首页</button>
    <div>

    <router-link to="/">home</router-link> |
    <router-link to="/child_1"> child_1</router-link> |
    <router-link to="/jason">jason</router-link> |
    <router-link to="/child_2">child_2</router-link>

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
      jason: 'hi jason'
    }
  },
  methods: {
    goForward () {
      this.$router.go(1)
    },
    goBack () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push('/') // 回到首页
    }
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
