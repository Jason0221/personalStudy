<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <img src="./assets/aeroSpace.jpg"> -->
    <!-- <a-button type="primary">Button</a-button> -->
  <a-card hoverable style="width: 300px">
    <img
      slot="cover"
      alt="example"
      width=100
      src="./assets/logoMini.png"
    />
    <a-card-meta title="Card title" description="This is the description">
      <!-- <a-avatar
        src="./assets/aeroSpace.jpg"
      /> -->
      <a-avatar>USER</a-avatar>
    </a-card-meta>
  </a-card>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background-color: rgb(240,242,245);

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
