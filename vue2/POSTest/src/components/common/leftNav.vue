<template>
  <div class="left-nav">
    <ul>
      <li>
        <i class="icon iconfont icon-recharge"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-shop"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-vipcard"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-settings"></i>
        <div>设置</div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  
}

</script>

<style>
.left-nav{
  color: #fff;
  font-size: 10px;
  height: 100%;
  background: #1d8ce0;
  float: left;
  width: 5%;
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