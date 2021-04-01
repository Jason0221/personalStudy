<template>
  <div class="left-nav">
    {{pageList}}
  </div>
</template>

<script>

export default {
  name: 'page',
  data: () => {
    return {
      current: 1,
      total: 178,
      totalPageNum: 12,
      pageSize: 20,
      pageList: ['<', 1, 2, 3, 4, 5, 6, 7, 8, 9, '>']
    }
  },
  mounted: () => {
    let startShowNum = 5
    // let endShowNum = pageSize
    // console.log('endShowNum:', endShowNum);
  }
}

</script>

<style scoped>
.left-nav{
  color: #fff;
  font-size: 20px;
  height: 100px;
  line-height: 100px;
  background: #1d8ce0;
  float: left;
  width: 400px;
}
.iconfont{
  font-size: 24px;
}
.left-nav ul {
  padding: 0;
  margin: 0;
}
.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  cursor: pointer;
}
</style>