<template>
  <div>
    
    <img alt="Vue logo" src="./assets/logo.png">
    
    <div>
      <h2>welcome</h2>
    </div>
    
    <div>
      <button v-for="(item, index) in goods" :key="index">
        {{index}} : {{item}}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'App',
    setup(){
      const goods = ref(['apple', 'pear', 'peach']);
      return {goods}
    }
  });
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
