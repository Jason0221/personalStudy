<template>
  <div class="hello">
    <div>

    <h1>{{ msg }}</h1>
    <p>newsID : {{$route.params.newsID}}</p>
    <p>newsTitle : {{$route.params.newsTitle}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'Hi, I am Params'
    }
  }
}
</script>
<style scoped>

</style>
