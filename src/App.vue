<template>
  <div id="app">
    <keep-alive include="ShopCar,Login">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
//引入主页面组件
//引入公共初始化样式
import "./assets/css/normalize.css";
export default {
  name: "app",
};
</script>
<style >
</style>
