<template>
  <div class="flavormuseum w">
    <!-- 字体布局 -->
    <h3>FLAVORMUSEUM</h3>
    <span>——</span><span class="flavor-title">风味馆</span><span>——</span>
    <p class="flavor-pargh">
      THE RIGHT SENSE OF DESIGN AND TEXTURE, THE DELICATE ELEGANCE OF LIGHT
      LUXURY.
    </p>
    <span>——</span>
    <!-- 图片布局 -->
    <div class="flavor-img">
      <div class="flavor-large-img">
        <router-link to="/onlineStore/storeDetails"><img src="../assets/upload/banner2.png" alt="" /></router-link>
      </div>
      <div class="flavor1">
        <router-link to="/onlineStore/storeDetails"><img src="../assets/upload/bed.png" alt="" /></router-link>
      </div>
      <div class="flavor2">
        <router-link to="/onlineStore/storeDetails"><img src="../assets/upload/tea.png" alt="" /></router-link>
      </div>
      <div class="flavor3">
        <router-link to="/onlineStore/storeDetails"><img src="../assets/upload/TV.png" alt="" /></router-link>
      </div>
      <div class="flavor4">
        <router-link to="/onlineStore/storeDetails"><img src="../assets/upload/sofa.png" alt="" /></router-link>
      </div>
      <div class="flavor5">
        <router-link to="/onlineStore/storeDetails"><img src="../assets/upload/chair.png" alt="" /></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FlavorMuseum",
};
</script>
<style>
/* 风味馆样式 */
.flavormuseum {
  color: #fff;
  text-align: center;
  margin-top: 70px;
  overflow: hidden;
}
.flavormuseum h3 {
  font-size: 30px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin-bottom: 17px;
}
.flavor-title {
  font-size: 30px;
  margin: 0 50px 0 50px;
}
.flavor-pargh {
  font-size: 12px;
  font-family: "Microsoft YaHei", 微软雅黑, "Microsoft JhengHei", 华文细黑,
    STHeiti;
  margin: 28px 0 28px 0;
}
/* 风味馆图片样式 */
.flavor-img{
    margin-top: 70px;
}
.flavor-large-img {
  float: left;
  width: 768px;
  height: 508px;
  overflow: hidden;
  margin-right: 53px;
  border: 10px solid #374840;
}
.flavor-large-img a img {
  width: 100%;
  height: 100%;
}
.flavor1,
.flavor2,
.flavor3,
.flavor4,
.flavor5 {
  float: left;
  width: 377px;
  height: 238px;
  overflow: hidden;
  margin-bottom: 33px;
  border: 10px solid #374840;
}
.flavor3{
  margin-right: 17px;
}
.flavor4 {
  margin-right: 51px;
}
</style>