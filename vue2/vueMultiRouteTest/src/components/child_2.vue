<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'child_2',
  data () {
    return {
      msg: 'Hi, I am child_2'
    }
  },
  // 第二种方式.
  beforeRouteEnter: (to, from, next) => {
    console.log('to:', to)
    console.log('from:', from)
    console.log('------------')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('to:', to)
    console.log('from:', from)
    next()
  }
}
</script>
<style scoped>
</style>
