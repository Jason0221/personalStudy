<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Error',
  data () {
    return {
      msg: 'Error Page, 页面不存在'
    }
  },
  mounted: () => {
    console.log('hello')
  }
}
</script>
<style scoped>

</style>
